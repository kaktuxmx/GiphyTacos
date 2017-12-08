// This is the script for my Giphy Tacos
//test

  var foods = ["Korean", "Tacos","Ramen"]

  function displaygiphysfood() {

    var food = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/" + food +"?api_key=mJhdpWB6O4RgVbVrwsAb1qbW9DqSZoZm"

    $.ajax({
      url: queryURL,
      method: "GET"
    });.done(function(response) {

      var foodDiv = $("<div class='food'>");
    });
  };

    function renderbuttons() {
      $("#buttons-view").empty();

      for (var i = 0; i < foodDiv.length; i++ ) {

      };
    };
