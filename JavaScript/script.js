// This is the script for my Giphy Tacos
//test
  alert("puto");

  var foods = ["Korean", "Tacos","Ramen"]

  function displaygiphysfood() {

    var food = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/" + food +"?api_key=mJhdpWB6O4RgVbVrwsAb1qbW9DqSZoZm"

    $.ajax({
      url: queryURL,
      method: "GET"
    });.done(function(response) {

      var foodDiv = $("<div class='food'>");

      var foodselected = response.selected

      foodDiv.append(foodselected);

    });
  };

    function renderbuttons() {
      $("#buttons-view").empty();

      for (var i = 0; i < foods.length; i++ ) {

      var f = $("<button>");

      f.addClass("food");

      f.attr("add-food");

      f.text(food[i]);

      $("buttons-view").append(f);

      };
    };
