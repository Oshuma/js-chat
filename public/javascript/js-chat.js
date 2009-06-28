// The constructor.
// var person = new Person('Dale');
function Person(name) {
  this.name = name;
} // Person()


//
// Public instance methods.
//

// person.say('message');
Person.prototype.say = function(message) {
  // Say the message.
  // TODO: Replace this with the server POST.
  $('#chat-log').append(this.name + ': ' + message + '\n');
  // $.Ajax({
  //   type: 'POST',
  //   url: '/messages',
  //   data: {'name': name, 'message': message},
  //   success: function() {},
  //   error:   function() {},
  // });
}


// Server contructor.
function Server(interval) {
  this.interval = (typeof(interval) == 'undefined' ? 5000 : interval);

  // Polls the server for new messages.
  // This is meant to be attached to a timer.
  this.poll = function() {
    // TODO: Replace this with the code that polls the server for new messages.
    $('#chat-log').append('Server polling for new messages...\n');
    // $.Ajax({
    //   type: 'GET',
    //   url: '/json',
    //   success: function() {},
    //   error:   function() {},
    // });
  };
}
