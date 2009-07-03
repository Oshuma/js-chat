Screw.Unit(function() {

  describe('JsChat', function() {
    it('should have a version string', function() {
      expect(typeof(JsChat.version)).to(equal, 'string');
    });
  }); // JsChat

  describe('Person', function() {

    // Setup
    var person = null;
    var server = null;
    before(function() {
      server = createServer();
      person = new Person('Dale', server);
    });

    describe('attributes', function() {
      it('should have a name', function() {
        expect(person.name).to(equal, 'Dale');
      });

      it('should have a Server instance', function() {
        expect(typeof(person.server)).to(equal, typeof(server));
      });
    }); // attributes

    describe('methods', function() {
      it('should say the message', function() {
        person.say('Test message.');
        var output = element('dom_test').innerHTML;
        var sentMessage = 'Dale: Test message.';
        expect(output).to(have, sentMessage);
      });
    }); // methods

  }); // Person


  describe('Server', function() {

    // Setup
    var server = null;
    before(function() {
      server = new Server();
    });

    it('should not be initialized yet', function() {
      expect(server.initialized).to(equal, false);
    });

    describe('options', function() {
      it('should have default values', function() {
        var options = server.options;
        expect(server.options).to(equal, Server.defaults);
      });

      it('should default constantPoll to true', function() {
        expect(server.options.constantPoll).to(equal, true);
      });
    }); // options

    describe('methods', function() {
      it('should not have a poll method, initially', function() {
        expect(server.poll).to(equal, undefined);
      });

      it('should not have a send method, initially', function() {
        expect(server.send).to(equal, undefined);
      });

      it('should set the poll method', function() {
        server.poll = function() { return 'poll'; };
        expect(server.poll()).to(equal, 'poll');
      });

      it('should set the send method', function() {
        server.send = function() { return 'send'; };
        expect(server.send()).to(equal, 'send');
      });

      it('should be initialized after run() is called', function() {
        // Define the required functions:
        server.poll = function() {};
        server.send = function() {};
        // Now run and test.
        server.run();
        expect(server.initialized).to(equal, true);
      });
    }); // methods

  }); // Server

}); // Screw.Unit
