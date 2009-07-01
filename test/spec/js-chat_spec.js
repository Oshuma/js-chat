Screw.Unit(function() {

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

    describe('options', function() {
      it('should have default values', function() {
        var options = server.options;
        expect(server.options).to(equal, Server.defaults);
      });
    }); // options

    describe('methods', function() {
      it('should not have a poll method, initially', function() {
        expect(server.poll).to(equal, undefined);
      });

      it('should not have a send method, initially', function() {
        expect(server.send).to(equal, undefined);
      });
    }); // methods

  }); // Server

}); // Screw.Unit
