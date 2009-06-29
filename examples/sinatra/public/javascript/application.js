// The UI shit.
$(document).ready(function() {
  // Create and initialize the server.
  var server = new Server().init();

  $('#chat-clear').click(function() {
    $('#chat-input').val('');
  });

  $('#chat-submit').click(function() {
    var message = $('#chat-input').val();
    var name    = $('#person-name').val();
    if (message == '' || name == '') {
      alert('Must enter a name and message.');
      return false;
    }
    new Person(name).say(message);
  });

  $('#refresh-chat').click(function() {
    server.poll();
  });
}); // $(document).ready()
