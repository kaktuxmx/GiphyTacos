  //This is the click event button to grab the input from html
  $("button").on("click", function() {
    //Prevents the page to reload
    event.preventDefault();

    //This variable will hold the input from the "free text" after the submit button is click.
    var food = $("#food-input").val().trim();
    console.log(food);

    // This is the Ajax URL with the key provided by Giphy.com dev site.
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=mJhdpWB6O4RgVbVrwsAb1qbW9DqSZoZm";
      console.log(queryURL);

    // Ajax Call, remember, is url, method, then done(function(response)) then your funtion.
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

        // This will save the response of the from the AJAX call.
      var foodselected = response.data;
      // Loop trought the response variable, to show all the jsons received.
      for (var i = 0; i < foodselected.length; i++) {

          //Create a new div for the responses.
        var gifDiv = $("<div class='item'>");

         // Create a new img source within the new divs created.
        var foodgifs = $("<img>");

            // Providing the attribute to the htmls as src.
          foodgifs.attr("src", foodselected[i].images.fixed_height.url);

            // Prepend the <img> html within the div.
            gifDiv.prepend(foodgifs);
            // prepend the Div within the div from the HTML page.
            $("#foodinputsgifs").prepend(gifDiv);
};
});
});
