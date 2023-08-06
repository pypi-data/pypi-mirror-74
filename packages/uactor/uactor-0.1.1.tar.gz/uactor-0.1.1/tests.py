"""uactor test suite."""

import gc
import os
import unittest

import uactor


class MyClass:
    def public(self):
        return True

    def _private(self):
        pass


class ProxyA(uactor.BaseProxy):
    pass


class ProxyB(uactor.BaseProxy):
    pass


class TestActor(uactor.Actor):
    _proxies_ = {
        'proxy_a': ProxyA,
        'proxy_b': ProxyB,
        }
    _method_to_typeid_ = {
        'get_proxy_a': 'proxy_a',
        'get_auto_proxy1': 'auto',
        }

    def get_proxy(self, value, typeid):
        return uactor.proxy(value, typeid)

    def get_proxy_a(self):
        pass

    def get_auto_proxy1(self):
        return MyClass()

    def get_auto_proxy2(self):
        try:
            return uactor.proxy(MyClass(), 'auto')
        except Exception as e:
            import traceback
            traceback.print_exc()
            raise

    def get_actor(self):
        return uactor.proxy(self, 'actor')

    def get_auto_actor(self):
        return uactor.proxy(self, 'auto')

    def tail_value(self, value, callback):
        return callback(value)

    def tail_value_proxy(self, value, typeid, callback):
        return callback(uactor.proxy(value, typeid))

    def echo(self, value):
        return value


class PropertyActor(uactor.Actor):
    _exposed_ = ('my_method', 'my_property', 'my_attribute', 'me')

    def __init__(self, value):
        self.my_attribute = value

    @property
    def my_property(self):
        return self.my_attribute

    def my_method(self):
        return self.my_attribute

    @property
    def me(self):
        return uactor.proxy(self, 'actor')


class RecursiveActor(uactor.Actor):

    _method_to_typeid_ = {'get_list': 'list'}

    def __init__(self, recurse=True):
        self.actor = type(self)(recurse=False) if recurse else None
        self.list = []

    def get_nested(self):
        return self.actor

    def get_nested_address_tuple(self):
        return (self.actor._token.address, self.actor._manager._address)

    def get_list(self):
        return self.list

    def get_pid(self):
        return os.getpid()


class NetworkActor(uactor.Actor):

    _options_ = {'address': ('localhost', 0), 'authkey': b'SECRET'}
    _exposed_ = ('id', 'get_auto', 'other_actor', 'other_connection_address')

    def __init__(self):
        self.other_actor = OtherNetworkActor()
        self.other_connection_address = self.other_actor.connection_address
        self.data = {}

    @property
    def id(self):
        return id(self)

    def get_auto(self):
        return uactor.proxy(self.data, 'auto')


class OtherNetworkActor(uactor.Actor):
    _options_ = {'address': ('localhost', 0), 'authkey': b'OTHER_SECRET'}


class ActorTestCase(unittest.TestCase):
    """Basic actor tests."""

    def assertTypeid(self, proxy, typeid):
        self.assertEqual(uactor.typeid(proxy), typeid)

    def assertProxyEqual(self, proxy_a, proxy_b):
        token_a, token_b = (
            (token.typeid, token.address, token.id)
            for token in (proxy_a._token, proxy_b._token)
            )
        self.assertEqual(token_a, token_b)

    def test_lifetime(self):
        actor = TestActor()
        process = actor._manager.process
        with actor as context:
            self.assertProxyEqual(actor, context)
            self.assertTrue(process.is_alive())
            with context:
                pass
            self.assertTrue(process.is_alive())
        process.join(timeout=1)
        self.assertFalse(process.is_alive())

        actor = TestActor()
        process = actor._manager.process
        with self.assertRaises(BrokenPipeError), actor as context:
            context.shutdown()
            process.join(timeout=1)
            self.assertFalse(process.is_alive())

        actor = TestActor()
        process = actor._manager.process
        self.assertTrue(process.is_alive())
        actor.shutdown()
        process.join(timeout=1)
        self.assertFalse(process.is_alive())

    def test_actor_proxies(self):
        with TestActor() as actor:
            for typeid in ('proxy_a', 'proxy_b'):
                manager_class = TestActor.manager_class
                self.assertIn(typeid, manager_class.typeids())
                self.assertNotIn(typeid, manager_class.__base__.typeids())

            self.assertTypeid(actor, 'actor')
            self.assertIsInstance(actor, TestActor.proxy_class)
            self.assertIsInstance(actor, uactor.ActorProxy)
            self.assertIsInstance(actor.get_proxy_a(), ProxyA)
            self.assertIsInstance(actor.get_proxy(None, 'proxy_b'), ProxyB)

            value = [1, 2, 3]
            proxy = actor.get_proxy(value, 'list')
            self.assertEqual(proxy[:], value)

    def test_proxies_do_not_override(self):
        with TestActor() as actor:
            with self.assertRaises(uactor.ProxyError):
                actor.get_auto_actor()

    def test_auto_proxies(self):
        with TestActor() as actor:
            for method in (actor.get_auto_proxy1, actor.get_auto_proxy2):
                with self.subTest(f'actor.{method.__name__}'):
                    auto = method()
                    self.assertTypeid(auto, 'auto')
                    self.assertTrue(auto.public())
                    with self.assertRaises(AttributeError):
                        auto._private()

    def test_proxy_errors(self):
        with self.assertRaises(uactor.ProxyError):
            uactor.proxy(None)

        with self.assertRaises(ValueError):
            uactor.typeid(None)

        with TestActor() as actor:
            with self.assertRaises(uactor.ProxyError):
                actor.get_proxy(1, 'actor')

            with self.assertRaises(uactor.ProxyError):
                actor.get_proxy(1, 'non-registered-proxy')

            proxy = actor.get_actor()
            token = proxy._token
            del proxy._token
            with self.assertRaises(uactor.ProxyError):
                uactor.typeid(proxy)
            proxy._token = token

    def test_proxy_manager_injection(self):
        actor1 = TestActor()
        actor2 = TestActor()

        with actor1, actor2:
            proxy = actor1.get_proxy(None, 'proxy_a')
            self.assertIs(type(proxy._manager), type(actor1._manager))

            proxy = actor2.echo(proxy)
            self.assertIs(type(proxy._manager), type(actor1._manager))

    def test_chaining(self):
        actor1 = TestActor()
        actor2 = TestActor()

        with actor1, actor2:
            value = id(self)
            self.assertEqual(actor1.tail_value(value, actor2.echo), value)

            value = [id(self)]
            proxy = actor1.tail_value_proxy(value, 'list', actor2.echo)
            self.assertEqual(proxy[:], value)

    def test_actor_properties(self):
        value = os.urandom(10)
        with PropertyActor(value) as actor:
            self.assertEqual(actor.my_attribute, value)
            self.assertEqual(actor.my_property, value)
            self.assertEqual(actor.my_method(), value)

            actor.my_attribute = value = os.urandom(10)
            self.assertEqual(actor.my_attribute, value)
            self.assertEqual(actor.me.my_attribute, value)
            self.assertEqual(actor.my_property, value)
            self.assertEqual(actor.my_method(), value)

    def test_nested_managers(self):
        actor_class = RecursiveActor
        actor_manager_class = actor_class.manager_class

        with actor_class() as actor:
            connection_address = actor.connection_address

            nested = actor.get_nested()
            nested_address = nested.connection_address
            self.assertNotEqual(nested_address, connection_address)
            self.assertNotEqual(nested.get_pid(), actor.get_pid())
            self.assertIs(type(nested._manager), actor_manager_class)

            actor_nested_address, other = actor.get_nested_address_tuple()
            self.assertEqual(actor_nested_address, other)
            self.assertEqual(nested_address, actor_nested_address)

            same_nested = actor.get_nested()
            same_nested_address = same_nested._token.address
            self.assertEqual(nested_address, same_nested_address)
            self.assertEqual(nested.get_pid(), same_nested.get_pid())

    def test_nested_references(self):
        actor_class = RecursiveActor

        with actor_class() as actor:
            nested = actor.get_nested()
            nested_address = nested._token.address

            nested_list = nested.get_list()
            nested_list_address = nested_list._token.address
            self.assertEqual(nested_address, nested_list_address)

            same_nested_list = nested.get_list()
            same_nested_list_address = nested_list._token.address
            self.assertEqual(nested_list_address, same_nested_list_address)

            nested_list.append(1)
            same_nested_list.append(2)
            self.assertEqual(list(nested_list), [1, 2])
            self.assertEqual(list(same_nested_list), [1, 2])

    def test_actor_proxy_issues(self):
        tests = [
            ({'_proxies_': {'actor': uactor.BaseProxy}}, 'is reserved'),
            ({'_method_to_typeid_': {'method': 'invalid'}}, 'is not defined'),
            ]
        for props, message in tests:
            with self.assertRaisesRegex(TypeError, f'.*{message}.*'):
                type('BrokenActor', (uactor.Actor,), props)

    def test_manager_reference_counting(self):
        actor = TestActor()
        process = actor._manager.process
        process.join(0)
        self.assertTrue(process.is_alive())

        del actor
        gc.collect()

        process.join(.5)
        self.assertFalse(process.is_alive())

    def test_manager_trailing_reference_counting(self):
        actor = TestActor()
        process = actor._manager.process
        proxy = actor.get_proxy([1, 2], 'list')

        del actor
        gc.collect()

        process.join(0)
        self.assertTrue(process.is_alive())

        del proxy
        gc.collect()

        process.join(.5)
        self.assertFalse(process.is_alive())

    def test_networking_manager(self):
        secret = b'SECRET'

        actor = NetworkActor()
        actor_host, actor_port = actor._token.address

        manager = NetworkActor.manager_class(
            ('localhost', actor_port),
            secret,
            )
        manager.connect()
        remote = manager.actor()
        self.assertEqual(remote.id, actor.id)

    def test_networking(self):
        secret = b'SECRET'

        actor = NetworkActor()
        process = actor._manager.process
        actor_id = actor.id
        actor_host, actor_port = actor._token.address

        host, port = actor.connection_address
        address = 'localhost', port
        remote = NetworkActor.connect(address, secret)
        self.assertEqual(remote._token.address, ('localhost', actor_port))
        self.assertEqual(remote.id, actor_id)

        remote.get_auto().update(a=1)
        self.assertEqual(actor.get_auto().get('a'), 1)

        with actor:
            host, port = actor.connection_address
            address = 'localhost', port
            remote = NetworkActor.connect(address, secret)
            self.assertEqual(remote._token.address, ('localhost', actor_port))
            self.assertEqual(remote.id, actor_id)

            remote.get_auto().update(a=2)
            self.assertEqual(actor.get_auto().get('a'), 2)

            with self.assertRaises(uactor.AuthkeyError):
                NetworkActor.connect(address, b'other')

            remote.shutdown()
            self.assertTrue(process.is_alive())

            with remote:
                pass
            self.assertTrue(process.is_alive())

        self.assertFalse(process.is_alive())

    def test_networking_forwarding(self):
        secret = b'SECRET'
        other_secret = b'OTHER_SECRET'

        with NetworkActor() as actor:
            with self.assertRaises(uactor.AuthkeyError):
                other_actor = actor.other_actor

            host, port = actor.other_connection_address
            with OtherNetworkActor.connect((host, port), other_secret):
                other_actor = actor.other_actor

            address = 'localhost', port
            capture = [
                ('127.0.0.1', port),
                (host, port),
                ]
            with OtherNetworkActor.connect(address, other_secret,
                                           capture=capture):
                other_actor = actor.other_actor


if __name__ == '__main__':
    unittest.main()
