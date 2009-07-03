// The jQuery shit.
$(document).ready(function() {
  $('#version').html('v' + JsChat.version);

  // Create a new server instance.
  var server = new Server();

  // Overload the send method to just append the person's name
  // and the message.
  server.send = function(person, message) {
    var messageData = $('#chat-form').serialize();
    $.post('/messages', messageData, function() {
      $('#chat-log').append('sent');
      server.poll();
    });
  };

  // Overload the poll method to get any new messages from the server.
  server.poll = function() {
    $.get('/messages', function(messages) {
      $('#chat-log').html(messages);
    });
  };

  // Now run the server.
  server.run();


  //
  // The UI shit.
  //
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
    new Person(name, server).say(message);
  });

  $('#refresh-chat').click(function() {
    server.poll();
  });
}); // $(document).ready()
