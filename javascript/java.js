$(document).ready(function () {
    console.log("function");


    var buttonValues = ["dog", "cat", "bird", "skunk"];

    for (var i = 0; i < buttonValues.length; i++) {
        var button = $("<button class='button'>");
        button.text(buttonValues[i]);
        $("#buttons").append(button);
    }
    // Adding click event listen listener to all buttons
    $("button").on("click", function () {
        // console.log("button");
        // Grabbing and storing the data-animal property value from the button
        var animal = $(this).attr("data-animal");

        // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=Q0YHyAA9kv7Erm4pP1Af0tmINJ88qNnf&limit=10";

        // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i].images.original.url);



                var displayDiv = $("<div>");
                displayDiv.addClass("holder");
                // for making the images still and responsive
                var image = $("<img>");
                image.attr("src", response.data[i].images.original_still.url);
                image.attr("data-still", response.data[i].images.original_still.url);
                image.attr("data-animate", response.data[i].images.original.url);
                image.attr("data-state", "still");
                image.attr("class", "gif");
                displayDiv.append(image);
                // grabbingm the rating and appending it onto the image
                var rating = response.data[i].rating;
                console.log(response);
                var pRating = $("<p>").text("Rating: " + rating);
                displayDiv.append(pRating)
                // grabbing the display images and putting it on the page
                $("#display-images").append(displayDiv);
            }
        })
    });
});


