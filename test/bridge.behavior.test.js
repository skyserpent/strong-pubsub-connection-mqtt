var Client = require('strong-pubsub');
var Adapter = require('strong-pubsub-mqtt');
var Connection = require('../'); // strong-pubsub-connection-mqtt
var Proxy = require('strong-pubsub-bridge');
var helpers = require('strong-pubsub-test');
var usingMosquitto = helpers.usingMosquitto;
var waitUntilAcceptingConnections = helpers.waitForConnection;
var defineBridgeBehaviorTests = helpers.defineBridgeBehaviorTests;
var getPort = helpers.getFreePort;

describe('bridge behavior', function () {
  beforeEach(function(done) {
    var test = this;
    usingMosquitto(function(err, port) {
      test.brokerPort = port;
      done(err);
    });
  });

  defineBridgeBehaviorTests(Proxy, Client, Adapter, Connection, {
    qos: 2,
    retain: true
  });
});
