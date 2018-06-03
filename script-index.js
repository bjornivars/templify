


function showTemplate(template, parent){

    var box = document.createElement("div"); // Creates a div called box
    box.classList.add("float-left");
    box.classList.add("col-m-24"); // Adds class "col-m-24" to box div
    box.classList.add("col-t-3");
    box.classList.add("col-sm-10");
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
    parent.appendChild(box);


}



var myTemplates = document.getElementById("templates");
var newlyAddedTemplates = document.getElementById("newlyAdded");
var highestRatedTemplates = document.getElementById("highestRated");



function compareAdded(a,b) {
    if (a.date_added < b.date_added)
        return -1;
    if (a.date_added > b.date_added)
        return 1;
    return 0;
}


function compareRating(a,b) {
    if (a.rating < b.rating)
        return -1;
    if (a.rating > b.rating)
        return 1;
    return 0;
}






fetch("https://www.templify.no/api/api.php/template")
    .then(function(response) {
        return response.json();

    })
    .then(function(myApi) {
        let myApi2 = [...myApi]
  //      let myApi3 = [...myApi2]

       // console.log(myApi);

        newlyAdded = myApi2.reverse(compareAdded).slice(0, 4);
        console.dir(newlyAdded);

        for (var newTemplate of newlyAdded){
            showTemplate(newTemplate, newlyAddedTemplates)
        }
/*
        highestRating = myApi3.reverse(compareRating).slice(0, 4);
        // console.dir(highestRating);
        for (var newTemplate2 of highestRating){
            showTemplate(newTemplate2, highestRatedTemplates)
        }
*/
        // Listing of all templates with search and categories and stuff....
        for (var template of myApi){

            var url = new URL(window.location.href);
            var search = url.searchParams.get("search");
            var catFilter = url.searchParams.get("cat");


             // console.log(search);

          //  console.log(template.category);

            if (search){

                if (template.title.toUpperCase().includes(search.toUpperCase())){
                    console.log("found " + template.title);
                    showTemplate(template, myTemplates);

                }
            } else {

                if (catFilter){
                    if (template.category === catFilter){
                        console.log("found " + template.category);
                        showTemplate(template, myTemplates);

                    }
                } else {
                    showTemplate(template, myTemplates);
                    document.getElementById("showIndex").style.display = "block";
                }
            }

        } // for-loop end

        var count = document.getElementById("templates").childElementCount; // Counts how many child objects there is
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

// "https://api.urbanapp.no/v1/venues/near/49.616673/6.128208/12/age/99/"

