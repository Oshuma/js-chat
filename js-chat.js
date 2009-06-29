/**
 * Person constructor.
 *
 * @constructor
 * @param {String} name The person's name.
 * @param {Server} server The server this person will communicate with.
 * @return A new person.
 */
function Person(name, server) {
  this.name   = name;
  this.server = server;
}


/**
 * Sends a message to the server.
 *
 * @member Person
 * @param {String} message The message to send to the server.
 * @returns Person
 */
Person.prototype.say = function(message) {
  this.server.send(this, message);
  return this;
}


/**
 * Server contructor.
 *
 * @constructor
 * @param {Integer} interval The number of milliseconds in which to poll the server.
 * @return A server instance.
 */
function Server(interval) {
  this.initialized = false;

  // Default interval is 5 seconds (5000ms).
  this.interval = (typeof(interval) == 'undefined' ? 5000 : interval);
}


/**
 * Sets up the Server (timers and misc. other options).
 * This should only be called once per Server instance.
 *
 * @member Server
 * @param {Boolean} initialPoll If true, the server is polled immediately when initializing.
 * @returns Server instance.
 */
Server.prototype.init = function( initialPoll ) {
  if (this.initialized) return;

  if (initialPoll) this.poll();
  setInterval(this.poll, this.interval);

  this.initialized = true;
  return this;
};


/**
 * Sends a person's message to the server storage.
 *
 * @member Server
 * @param {Person} person The person who's sending the message.
 * @param {String} message The message body.
 * @returns True if success, false otherwise.
 */
Server.prototype.send = function(person, message) {
  // TODO: Replace this with the server POST which stores the message.
  if (typeof(jQuery) == 'undefined') return;
  $('#chat-log').append(person.name + ': ' + message + '\n');
  // $.Ajax({
  //   type: 'POST',
  //   url: '/messages',
  //   data: {'name': name, 'message': message},
  //   success: function() {},
  //   error:   function() {},
  // });
};


/**
 * This method is called on an interval to poll the server for new messages.
 *
 * @member Server
 * @returns Server instance.
 */
Server.prototype.poll = function() {
  // TODO: Replace this with the code that polls the server.
  if (typeof(jQuery) == 'undefined') return;
  $('#chat-log').append('Server polling for new messages...\n');
  // $.Ajax({
  //   type: 'GET',
  //   url: '/json',
  //   success: function() {},
  //   error:   function() {},
  // });
  return this;
};
