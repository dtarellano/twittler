$(document).ready(function(){
  var $body = $('body');
  //$body.html('');

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<li class="list-group-item"></li>');
        $tweet.text('@' + tweet.user + ': ' + tweet.message);
        $tweet.appendTo('.list-group');
        index -= 1;
    }
//<li class="list-group-item">Vestibulum at eros</li>
});
