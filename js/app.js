$(function(){

  var messages = {
    already_invited: "Uh oh! It looks like that email address has already been invited.<br>If you think this is an error, please send a note to <a style='color:white; text-decoration:underline' href='mailto:support@syncano.io'>support@syncano.io</a>.",
    invite_sent: "Woo hoo!  Your invite is on it's way - welcome to the community!"
  }

  $('form').on('submit', function(e) {
    e.preventDefault();
    var url = "https://api.syncano.io/v1/instances/black-dew-3304/webhooks/p/9659a5f1693cf77733f300f1da949d3a9865f5bc/slack_invite/";
    var data = {
      first_name: $('#first_name').val(),
      last_name: $('#last_name').val(),
      email: $('#email').val()
    };

    $.post(url, data, function(data) {
      var result = JSON.parse(data.result.stdout);
      if (result.error) {
        $('#msg .white-text').html(messages[result.error]);
        $('#msg').show().addClass('red');
      } else {
        $('#msg .white-text').html(messages.invite_sent);
        $('#msg').show().addClass('green');
      }

      console.log(data);
    })
  });

});
