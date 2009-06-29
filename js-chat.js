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
 * @param {String} basePath The base URL path to the (RESTful) message resource.
 * @param {String} format Data exchange format (json, xml, etc.).
 * @param {Boolean} initialPoll If true, the server is polled immediately when initializing.
 * @param {Integer} interval The number of milliseconds in which to poll the server.
 */
Server.defaults = {
  basePath: '/messages',
  format: 'json',
  initialPoll: false,
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
Server.prototype.init = function() {
  if (this.initialized) return this;

  if (this.options.initialPoll) this.poll();
  setInterval(this.poll, this.options.interval);

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
 * @type Boolean
 */
Server.prototype.send = function(person, message) {
  // TODO: Replace this with your server POST which stores the message.
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
 * @type Server
 */
Server.prototype.poll = function() {
  // TODO: Replace this with your code that polls the server.
  // $.Ajax({
  //   type: 'GET',
  //   url: '/messages.json',
  //   success: function() {},
  //   error:   function() {},
  // });
  return this;
};
