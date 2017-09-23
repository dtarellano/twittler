
$(document).ready(function(){
  var $body = $('body');
  //$body.html('');
  var index = streams.home.length - 1;
  
    var streamTweets = function() {
      var loop = streams.home.length - 1;

      while (loop >= 0) {
        var tweet = streams.home[loop];
        var $tweet = $(`<li class="list-group-item tweet"><a href="#">@${tweet.user}</a><p>${tweet.message}</p><strong>${tweet.created_at}</strong</li>`);
          $tweet.appendTo('.news-feed');
          loop -= 1;
      }

      index = streams.home.length; - 1;
    }


    var checkForTweets;

    var tweetTimer = function() {
    checkForTweets = setInterval(function() {
      var newTweetCheck = streams.home.length - 1

        if (newTweetCheck > index) {
          $('#notification').text(`You have ${newTweetCheck - index} new Tweets`)
          $('#notification').slideDown('slow')
        }
      }, 4000);
    }

    streamTweets()
    tweetTimer()

    $('#notification').on('click', function() {
      clearInterval(checkForTweets)
      $('.tweet').remove();
      streamTweets()
      $('#notification').hide();
      tweetTimer()
    })

});
