// The UI shit.
$(document).ready(function() {
  $('#chat-submit').click(function() {
    var name    = $('#person-name').val();
    var message = $('#chat-input').val();
    new Person(name).say(message);
    return false;
  });
}); // $(document).ready()
