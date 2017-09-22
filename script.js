$(document).ready(function(){
  var $body = $('body');
  //$body.html('');

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<li class="list-group-item"></li>');
        $tweet.text(`@${tweet.user}: ${tweet.message} posted at ${tweet.created_at}`)
        $tweet.appendTo('.list-group');
        index -= 1;
    }

    var checkForTweets = function() {
      setInterval(function() {
        var newTweetCheck = streams.home.length - 1
        if (newTweetCheck > index) {
          $('.list-group-item').remove();
          while(newTweetCheck >= 0) {
            var tweet = streams.home[newTweetCheck];
            var $tweet = $('<li class="list-group-item"></li>');
              $tweet.text(`@${tweet.user}: ${tweet.message} posted at ${tweet.created_at}`)
              $tweet.appendTo('.list-group');
              newTweetCheck -= 1;
          }
        }
      }, 3000)
    }

    checkForTweets()
});
