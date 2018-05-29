
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


    fetch("https://www.templify.no/api/api.php/template/" + id) // Fetches the API + id
        .then(function(response){
            return response.json(); // Define resonse as json
            // console.log(response.json());
        })
        .then(function(response) { // Put json response in variable list, and create function
            var template = response; // Loop through json response, and grab each single card
            console.log(response.id);
            document.getElementById("hovednavn").innerText = template.title;
            //console.dir(response);
            document.getElementById("intro").innerText = template.intro;
            document.getElementById("keyword1").innerText = "- " + template.keyword1;
            document.getElementById("keyword2").innerText = "- " + template.keyword2;
            document.getElementById("author").innerText = "Made by " + template.author;
            document.getElementById("description").innerText = template.description;
            document.getElementById("reviewrating1").innerText = template.reviewrating1;
            document.getElementById("reviewrating2").innerText = template.reviewrating2;
            document.getElementById("reviewrating3").innerText = template.reviewrating3;
            document.getElementById("review1").innerText = template.review1;
            document.getElementById("review2").innerText = template.review2;
            document.getElementById("review3").innerText = template.review3;
            document.getElementById("downloadBtn").setAttribute( "onClick", "location.href='"+template.downloadurl+"'"  )
            var img = document.getElementById("logoImg");
            if (template.imgurlbig === null){
                img.src = "https://www.happyceliac.com/wp-content/uploads/2018/02/placeholder-image.png";
            } else {
                img.src = template.imgurlbig; // Makes variable img.src = place.imageUrl. The url of the image depends on which place displaye
            }
            // Please get the following keys: imageUrl, name, text, rarity and colors. Display their values.
        }) // Fetch .then end






// "https://api.urbanapp.no/v1/venues/near/49.616673/6.128208/12/age/99/"
