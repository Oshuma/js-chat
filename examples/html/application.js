// Shorthand helper to grab an element by id.
function element(id) {
  return document.getElementById(id);
}

// This function will be called once the DOM is loaded.
window.onload = function() {
  element('version').innerHTML = 'v' + JsChat.version;

  // 'Database' to store the messages; with a few test messages.
  var allMessages = [
    'Robot 1: Kill all humans.',
    'Robot 420: Smoke all humans.',
    'Human: What?'
  ];

  // Create a new server instance.
  var server = new Server();

  // Overload the send method to just append the person's name
  // and the message to an element.
  server.send = function(person, message) {
    allMessages.push(person.name + ': ' + message);
    server.poll(); // Not needed if the Server option 'pollAfterSend' is true.
  };

  // Overload the poll method to get any new messages from the server.
  server.poll = function() {
    element('chat-log').innerHTML = allMessages.join('\n');
  };

  // Now run the server.
  server.run();


  //
  // UI shit.
  //

  element('chat-clear').onclick = function() {
    element('chat-input').value = null;
    return false;
  }

  /**
   * This handles posting a new message.
   */
  element('chat-submit').onclick = function() {
    // Get the person's name and message; bail if either are blank.
    var message = element('chat-input').value;
    var name    = element('person-name').value;
    if (message == '' || name == '') {
      alert('Must enter a name and message.');
      return false;
    }
    // Here we create a new Person instance, passing the name
    // and server instance; then we just call the say method.
    new Person(name, server).say(message);
    element('chat-input').value = null;
    return false;
  }

  element('refresh-chat').onclick = function() {
    server.poll();
    return false;
  }

} // window.onload()
