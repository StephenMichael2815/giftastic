$(document).ready(function(){
src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
type="text/javascript"

var displayedButtons = 


// Adding click event listen listener to all buttons
$("button").on("click", function() {
    // Grabbing and storing the data-animal property value from the button
    var animal = $(this).attr("data-animal");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing an AJAX request with the queryURL
    
    $.ajax({
        url: queryURL, 
        method: "GET"
    }).done(function(response) {

        for(var j = 0; j < limit; j++) {    

            var displayDiv = $("<div>");
            displayDiv.addClass("holder");
        
            var image = $("<img>");
            image.attr("src", response.data[j].images.original_still.url);
            image.attr("data-still", response.data[j].images.original_still.url);
            image.attr("data-animate", response.data[j].images.original.url);
            image.attr("data-state", "still");
            image.attr("class", "gif");
            displayDiv.append(image);

            var rating = response.data[j].rating;
            console.log(response);
            var pRating = $("<p>").text("Rating: " + rating);
            displayDiv.append(pRating)

            $("#display-images").append(displayDiv);
        }
    });
})
})