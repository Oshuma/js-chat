// The UI shit.
$(document).ready(function() {
  // Create the server and setup the polling interval.
  var server = new Server();
  setInterval(server.poll, server.interval);

  $('#chat-submit').click(function() {
    var name    = $('#person-name').val();
    var message = $('#chat-input').val();
    new Person(name).say(message);
    return false;
  });

  $('#refresh-chat').click(function() {
    new Server().poll();
  });
}); // $(document).ready()
