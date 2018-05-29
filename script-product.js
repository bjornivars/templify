
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
            document.getElementById("downloadBtn").setAttribute( "onClick", "location.href='"+template.downloadurl+"'")
            var img = document.getElementById("logoImg");
            if (template.imgurlbig === null){
                img.src = "https://www.happyceliac.com/wp-content/uploads/2018/02/placeholder-image.png";
            } else {
                img.src = template.imgurlbig; // Makes variable img.src = place.imageUrl. The url of the image depends on which place displaye
            }

            fetch("https://www.templify.no/api/api.php/template")
                .then(function(response) {
                    return response.json();

                })
                .then(function(myApi) {
                    // console.log(myApi);
                    var i = 0;
                    for (var relate of myApi){
                        var url = new URL(window.location.href);
                        var search = url.searchParams.get("search");
                        var catFilter = url.searchParams.get("cat");


                        // console.log(search);

                        //  console.log(template.category);

                        if (relate.category === template.category && i <= 3 && relate.id != template.id){
                            showTemplate(relate);
                            i++;
                            console.log(i)
                        }
                    } // for-loop end

                    var count = document.getElementById("related").childElementCount; // Counts how many child objects there is
                    console.log(count);
                    if (count === 0){
                        console.log("Nada Templates");
                        var h1 = document.createElement("h1");
                        var h1TextNode = document.createTextNode("No results found");
                        h1.appendChild(h1TextNode);
                        myTemplates.appendChild(h1);
                        // If there are no cards that matches search, write "No results for" and search word
                    } // If count == 0 done

                });
            // Please get the following keys: imageUrl, name, text, rarity and colors. Display their values.
        }) // Fetch .then end





function showTemplate(template){

    var box = document.createElement("div"); // Creates a div called box
    box.classList.add("float-left");
    box.classList.add("col-m-24"); // Adds class "col-m-24" to box div
    box.classList.add("col-t-3");
    box.classList.add("col-sm-9");
    box.classList.add("items1");


    var attribute = document.createElement("a"); // Creates an a element called attribute
    attribute.classList.add("black-a"); // Adds class "btn" to attribute
    attribute.classList.add("container-a");
    attribute.href = "product.html?id=" + template.id; // Gives the attribute an href that should contain "product.html?id=" and the selected template´s id.

    var width100 = document.createElement("div");
    width100.classList.add("width-100");

    var img = document.createElement("img"); // Creates an element called img
    img.src = template.imgurl; // Makes variable img.src = card.imageUrl. The url of the image depends on which card displaye
    img.setAttribute("alt", "Image for " + template.title);
    img.classList.add("img-mobile");
    // img.style.width = "100%"; // Sets image style width to 100%

    var infoDiv = document.createElement("div");
    infoDiv.classList.add("infoDiv");

    var h3title = document.createElement("h3"); // Creates a h4 element called h4
    var h3titleTag = template.title; // Makes variable h4Tag = card.name. The name of the card depends on which card displayed
    var h3TextNode = document.createTextNode(h3titleTag); // Makes a text node out of the result of card.name
    h3title.appendChild(h3TextNode); // Puts the h3TextNode inside the h3 tag to display name of the template

    var madeBy = document.createElement("span");
    var madeByTitleTag = template.author; // Makes variable h4Tag = card.name. The name of the card depends on which card displayed
    var madeByTextNode = document.createTextNode(madeByTitleTag); // Makes a text node out of the result of card.name
    madeBy.appendChild(madeByTextNode); // Puts the h3TextNode inside the h3 tag to display name of the template
    madeBy.classList.add("madeby-span");

    var spanDiv = document.createElement("div");
    spanDiv.classList.add("span-div");


    var spanLeft = document.createElement("span");
    var spanLeftTag = template.catname;
    var spanLeftTextNode = document.createTextNode(spanLeftTag);
    spanLeft.appendChild(spanLeftTextNode);
    spanLeft.classList.add("float-left");
    spanLeft.classList.add("madeby-span");

    var spanRight = document.createElement("span");
    var spanRightTag = template.rating;
    var spanRightTextNode = document.createTextNode(spanRightTag);
    spanRight.appendChild(spanRightTextNode);
    spanRight.classList.add("float-right");
    spanRight.classList.add("madeby-span");


    var ratingStar = document.createElement("i");
    ratingStar.classList.add("fas");
    ratingStar.classList.add("fa-star");


    box.appendChild(attribute);
    attribute.appendChild(width100);
    width100.appendChild(img);
    attribute.appendChild(infoDiv);
    infoDiv.appendChild(h3title);
    infoDiv.appendChild(madeBy);
    infoDiv.appendChild(spanDiv);
    spanDiv.appendChild(spanLeft);
    spanDiv.appendChild(spanRight);
    spanRight.appendChild(ratingStar);
    myTemplates.appendChild(box);

}




// "https://api.urbanapp.no/v1/venues/near/49.616673/6.128208/12/age/99/"
var myTemplates = document.getElementById("related");

