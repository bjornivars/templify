
// refer to question 2 before development starts for scope document
// get URL query string
// function getQueryStringValue (key) {
// return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
//}
// variable for the id
// var id = getQueryStringValue("id");
// Code Bjørn-Ivar Skuggen


var url = new URL(window.location.href); // Creates variable url. new URL window.location.href returns the href (URL) of the current page
var id = url.searchParams.get("id"); // returns the first value associated to the given search parameter.


    fetch("https://api.magicthegathering.io/v1/cards/" + id) // Fetches the API + id
        .then(function(response){
            return response.json(); // Define resonse as json
            // console.log(response.json());
        })
        .then(function(response) { // Put json response in variable list, and create function
            var template = response.template; // Loop through json response, and grab each single card
            console.log(response.id);
            document.getElementById("hovednavn").innerText = template.title;
            document.getElementById("intro").innerText = template.intro;



            // Please get the following keys: imageUrl, name, text, rarity and colors. Display their values.



        }) // Fetch .then end


