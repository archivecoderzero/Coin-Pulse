$(document).ready(function() {
  // handle the form submit
  $("#searchText").on('keypress', function(e) {
    if (e.which == 13 || e.keyCode == 13) {
      if ($(this).val().trim().length > 0) {
        // initiate an AJAX call to send the data
        fireAJAX($(this).val().trim());
      }
    }
  });

  

  function fireAJAX(text) {
    $.ajax({
      type: "POST",
      url: "/search",
      data: {
        "search": text
      },
      beforeSend: function(xhr) {
        $('.tweet-results').html('');
        $('.results').show();
        enableState();
      },
      success: parseData,
      error: oops
    });
  }



  function parseData(data) {
    disableState();
    var html = '';
    var sentimentScore = 0;

    for (var i = 0; i < data.length; i++) {
      var s = data[i].sentiment 
      var t = data[i].tweet;

      let tweetScore = s.score ? s.score:0;
      sentimentScore += 0 + tweetScore * parseInt((t.retweet_count + 1)) ;
    };
    $('.tweet-results').html(html);
    $('#sentimentScore').html(sentimentScore);
  }

  function oops(data) {
    $('.error').show();
    disableState();
  }

  function disableState() {
    $('.loading').hide();
    $('#searchText').prop('disabled', false);
  }

  function enableState() {
    $('.loading').show();
    $('#searchText').prop('disabled', true);
  }

});

