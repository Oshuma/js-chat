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
  //   url: '/path/to/post',
  //   data: {name: name, message: message},
  //   success: function() {},
  //   error:   function() {},
  // });
}


// Server contructor.
function Server(interval) {
  this.interval = (typeof(interval) == 'undefined' ? 10 : interval);

  // Polls the server for new messages.
  this.poll = function() {
    alert('Server is getting data.');
    // TODO: Here's the code that polls the server for new messages.
    // $.Ajax({
    //   type: 'GET',
    //   url: '/json',
    //   success: function() {},
    //   error:   function() {},
    // });
  };
}
