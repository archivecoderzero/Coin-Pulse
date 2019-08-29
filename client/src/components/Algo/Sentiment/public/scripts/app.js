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

      let tweetScore = s.score ;
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


// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function() {
  var cache = {};

  this.tmpl = function tmpl(str, data) {
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
      tmpl(document.getElementById(str).innerHTML) :

    // Generate a reusable function that will serve as a template
    // generator (and which will be cached).
    new Function("obj",
      "var p=[],print=function(){p.push.apply(p,arguments);};" +

      // Introduce the data as local variables using with(){}
      "with(obj){p.push('" +

      // Convert the template into pure JavaScript
      str
      .replace(/[\r\t\n]/g, " ")
      .split("{{").join("\t") // modified
      .replace(/((^|\}\})[^\t]*)'/g, "$1\r") // modified
      .replace(/\t=(.*?)}}/g, "',$1,'") // modified
      .split("\t").join("');") 
      .split("}}").join("p.push('") // modified
      .split("\r").join("\\'") + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn(data) : fn;
  };
})();
