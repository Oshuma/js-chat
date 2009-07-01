Screw.Unit(function() {
  before(function() {
    $('dom_test').empty();
  });
});

// RegExp type matcher.
Screw.Matchers["have"] = {
  match: function(expected, actual) {
    var pattern = new RegExp(expected);
    return pattern.test(actual);
    // return actual.find(expected).length > 0;
  },
  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' to not have ' : ' to have ') + $.print(expected);
  }
}

// Shorthand helper.
function element(id) {
  return document.getElementById(id);
}

// Helper to output a debug test message.
function debug (message) {
  if (!message) return;
  var domTest = document.getElementById('dom_test');
  domTest.innerHTML += ('<div class="debug">' + message + '</div>');
}

function createServer(options, poll, send) {
  // Set some defaults.
  if (typeof(options) == 'undefined') options = Server.defaults;
  if (typeof(poll) == 'undefined') {
    poll = function() {
      element('dom_test').innerHTML += 'Polling...\n';
    }
  }
  if (typeof(server) == 'undefined') {
    send = function(person, message) {
      theMessage = person.name + ': ' + message + '\n';
      element('dom_test').innerHTML += theMessage;
    }
  }

  // Create and return the server.
  var server = new Server(options);
  server.poll = poll;
  server.send = send;

  return server;
}
