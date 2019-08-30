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
    var sentimentScore = 0;
    for (var i = 0; i < data.length; i++) {
      var s = data[i].sentiment 
      var t = data[i].tweet;
      let tweetScore = s.score ? (s.score*parseInt((t.retweet_count + 1)))  : 0;
      sentimentScore += tweetScore ;
    
    };
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

