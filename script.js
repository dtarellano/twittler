
$(document).ready(function(){
  var index = streams.home.length - 1;


    var streamTweets = function(user) {
      var stream;

      if (arguments.length) {
        stream = streams.users[user];
      } else {
        stream = streams.home;
      }
      var loop = stream.length - 1;

      while (loop >= 0) {
        var tweet = stream[loop];
        var $tweet = $(`<li class="list-group-item tweet"><a href="#" id="user"  data-user="${tweet.user}">@${tweet.user}</a><p>${tweet.message}</p><strong>${tweet.created_at}</strong</li>`);
          $tweet.appendTo('.news-feed').hide().show('slow');
          loop -= 1;
      }

      index = streams.home.length; - 1;
    };


    var checkForTweets;

    var tweetTimer = function() {
    checkForTweets = setInterval(function() {
      var newTweetCheck = streams.home.length - 1;

        if (newTweetCheck > index) {
          $('#notification').text(`You have ${newTweetCheck - index} new Tweets`)
          $('#notification').slideDown('slow')
        }
      }, 5000);
    };

    streamTweets()
    tweetTimer()

    $('#notification').on('click', function() {
      clearInterval(checkForTweets)
      $('.tweet').remove();
      streamTweets()
      $('#notification').hide();
      tweetTimer()
    });

    $('body').on('click', '#user', function(e) {
      e.preventDefault();
      var $user = $(this).data('user');
      clearInterval(checkForTweets)
      $('.tweet').remove();
      streamTweets($user)
      $('#notification').hide();
      $('#back').show();
    });

    $('#back').on('click', function() {
      $('.tweet').remove();
      streamTweets()
      tweetTimer()
      $('#back').hide();
    })
});
