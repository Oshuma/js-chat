/**
 * Person constructor.
 *
 * @constructor
 * @param {String} name The person's name.
 * @return A new person.
 */
function Person(name) {
  this.name = name;
}


/**
 * Sends a message to the server.
 *
 * @member Person
 * @returns Person
 */
Person.prototype.say = function(message) {
  // TODO: Replace this with the server POST.
  $('#chat-log').append(this.name + ': ' + message + '\n');
  // $.Ajax({
  //   type: 'POST',
  //   url: '/messages',
  //   data: {'name': name, 'message': message},
  //   success: function() {},
  //   error:   function() {},
  // });
  return this;
}


/**
 * Server contructor.
 */
function Server(interval) {
  // Default interval is 5 seconds (5000ms).
  this.interval = (typeof(interval) == 'undefined' ? 5000 : interval);
}

/**
 * Sets up the Server (timers and misc. other options).
 *
 * @member Server
 * @returns Server
 */
Server.prototype.init = function() {
  setInterval(this.poll, this.interval);
  return this;
};

/**
 * This method is called on an interval to poll the server for new messages.
 *
 * @member Server
 * @returns Server
 */
Server.prototype.poll = function() {
  // TODO: Replace this with the code that polls the server.
  $('#chat-log').append('Server polling for new messages...\n');
  // $.Ajax({
  //   type: 'GET',
  //   url: '/json',
  //   success: function() {},
  //   error:   function() {},
  // });
  return this;
};
