/**
 * Person constructor.
 *
 * @constructor
 * @param {String} name The person's name.
 * @param {Server} server The server this person will communicate with.
 * @return A new person.
 * @type Person
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
 * @type Person
 */
Person.prototype.say = function(message) {
  this.server.send(this, message);
  return this;
}


/**
 * Holds the default Server options.
 *
 * @final
 * @type Object
 * @param {String} format Data exchange format (json, xml, etc.).
 * @param {Boolean} initialPoll If true, the server is polled immediately when run.
 * @param {Integer} interval The number of milliseconds in which to poll the server.
 */
Server.defaults = {
  initialPoll: true,
  interval: 5000,
};

/**
 * Server contructor.
 *
 * @constructor
 * @param {Object} options An options hash to customize the server.
 * @see Server#defaults
 * @return A server instance.
 * @type Server
 */
function Server(options) {
  this.initialized = false;
  if (typeof(options) == 'undefined') this.options = Server.defaults;
}


/**
 * Sets up the Server (timers and misc. other options).
 * This should only be called once per Server instance.
 *
 * @member Server
 * @returns Server instance.
 * @type Server
 */
Server.prototype.run = function() {
  if (this.initialized) return this;

  if (this.options.initialPoll) this.poll();
  setInterval(this.poll, this.options.interval);

  this.initialized = true;
  return this;
};


/**
 * Sends a person's message to the server storage.
 *
 * This is the method that you want to overload on your server
 * instance to send a message to a server.  It must accept two
 * parameters, the Person instance and the message (string).
 *
 * @member Server
 * @param {Person} person The person who's sending the message.
 * @param {String} message The message body.
 * @returns True if success, false otherwise.
 * @type Boolean
 */
// Server.prototype.send = function(person, message) {};


/**
 * This polls the server for new messages at the server's interval option.
 *
 * Overload this method to customize where the data comes from and what happens to it.
 *
 * @member Server
 * @returns Server instance.
 * @type Server
 */
// Server.prototype.poll = function() {};
