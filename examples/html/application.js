// Shorthand helper.
function element(id) {
  return document.getElementById(id);
}

// This function will be called once the DOM is loaded.
window.onload = function() {
  // Create a new server instance.
  var server = new Server();

  // Overload the send method to just append the person's name
  // and the message.
  server.send = function(person, message) {
    element('chat-log').innerHTML += person.name + ': ' + message + '\n';
  };

  // Overload the poll method to get any new messages from the server.
  server.poll = function() {
    element('chat-log').innerHTML += 'Polling...\n';
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

  element('chat-submit').onclick = function() {
    var message = element('chat-input').value;
    var name    = element('person-name').value;
    if (message == '' || name == '') {
      alert('Must enter a name and message.');
      return false;
    }
    new Person(name, server).say(message);
    return false;
  }

  element('refresh-chat').onclick = function() {
    server.poll();
    return false;
  }

} // window.onload()
