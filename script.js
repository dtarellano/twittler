
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
        var timeago = tweet.created_at.toISOString();
        var $tweet = $(`<li class="list-group-item tweet"><a href="#" id="user"  data-user="${tweet.user}">@${tweet.user}</a><p>${tweet.message}</p><time class="timeago" datetime="${timeago}"></time></li>`);
          $tweet.appendTo('.news-feed').hide().slideDown('slow');
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
          $('#notification').slideDown()
        }
      }, 5000);
    };

    streamTweets()
    tweetTimer()
    jQuery("time.timeago").timeago();


    $('#notification').on('click', function() {
      clearInterval(checkForTweets)
      $('.tweet').remove();
      streamTweets()
      $('#notification').hide('slideUp');
      tweetTimer()
      jQuery("time.timeago").timeago();
    });

    $('body').on('click', '#user', function(e) {
      e.preventDefault();
      var $user = $(this).data('user');
      clearInterval(checkForTweets)
      $('.tweet').remove();
      streamTweets($user)
      $('#notification').hide();
      $('#back').show();
      jQuery("time.timeago").timeago();
    });

    $('#back').on('click', function() {
      $('.tweet').remove();
      streamTweets()
      tweetTimer()
      $('#back').hide();
      jQuery("time.timeago").timeago();
    })
});
