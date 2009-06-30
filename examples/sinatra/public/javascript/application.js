// The UI shit.
$(document).ready(function() {
  var server = new Server().init();

  // Overload the send method to just append the person's name
  // and the message.
  server.send = serverSend;

  // Overload the poll method to get any new messages from the server.
  server.poll = serverPoll;

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

serverSend = function(person, message) {
  // if (typeof(jQuery) == 'undefined') return;
  // jQuery.Ajax({
  //   type: 'POST',
  //   url: '/messages',
  //   success: function(response) { alert(response); },
  //   error:   function(response) { alert(response); },
  // });
};

serverPoll = function() {
  // if (typeof(jQuery) == 'undefined') return;
  // $.Ajax({});
};
