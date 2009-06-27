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
}


// Server contructor.
function Server() {}

// Polls the server for new messages.
Server.prototype.poll = function(interval) {
  if (typeof(interval) == undefined) interval = 15;
}
