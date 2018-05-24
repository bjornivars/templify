

function buildSidebar(){
    var sidebarMenu = document.getElementById("sidebarMenu");
    var mobileMenu = document.getElementById("mobileMenu");

    fetch("https://www.templify.no/api/api.php/category")
        .then(function(response) {
            return response.json();

        })
        .then(function(myCats) {
            console.log(myCats);

            for (var cat of myCats){
                console.log(cat.name);

                var sidebarLi = document.createElement("li");
                sidebarLi.classList.add("items");

                var sidebarAttr = document.createElement("a");
                sidebarAttr.classList.add("black-a");
                sidebarAttr.href = "#cat" + cat.id;
                sidebarAttr.text = cat.name;

                sidebarLi.appendChild(sidebarAttr);
                var mobileLi = sidebarLi.cloneNode(true);
                sidebarMenu.appendChild(sidebarLi);
                mobileMenu.appendChild(mobileLi);

            }
        })





}

buildSidebar();


function showTemplate(template){

    var box = document.createElement("div"); // Creates a div called box
    box.classList.add("float-left");
    box.classList.add("col-m-2"); // Adds class "col-sm-4" to box div
    box.classList.add("col-t-25");
    box.classList.add("col-sm-4");
    box.classList.add("items1");


    var attribute = document.createElement("a"); // Creates an a element called attribute
    attribute.classList.add("black-a"); // Adds class "btn" to attribute
    attribute.href = "product.html?id=" + template.id; // Gives the attribute an href that should contain "product.html?id=" and the selected template´s id.

    var width100 = document.createElement("div");
    width100.classList.add("width-100");

    var img = document.createElement("img"); // Creates an element called img
    img.src = template.imgurl; // Makes variable img.src = card.imageUrl. The url of the image depends on which card displaye
    img.classList.add("img-mobile");
    // img.style.width = "100%"; // Sets image style width to 100%


    var h3title = document.createElement("h3"); // Creates a h4 element called h4
    var h3titleTag = template.title; // Makes variable h4Tag = card.name. The name of the card depends on which card displayed
    var h3TextNode = document.createTextNode(h3titleTag); // Makes a text node out of the result of card.name
    h3title.appendChild(h3TextNode); // Puts the h3TextNode inside the h3 tag to display name of the template


    var spanDiv = document.createElement("div");
    spanDiv.classList.add("span-div");


    var spanLeft = document.createElement("span");
    var spanLeftTag = template.category;
    var spanLeftTextNode = document.createTextNode(spanLeftTag);
    spanLeft.appendChild(spanLeftTextNode);
    spanLeft.classList.add("float-left");

    var spanRight = document.createElement("span");
    var spanRightTag = template.rating;
    var spanRightTextNode = document.createTextNode(spanRightTag);
    spanRight.appendChild(spanRightTextNode);
    spanRight.classList.add("float-right");

    var ratingStar = document.createElement("i");
    ratingStar.classList.add("fas");
    ratingStar.classList.add("fa-star");


    box.appendChild(attribute);
    attribute.appendChild(width100);
    attribute.appendChild(h3title);
    attribute.appendChild(spanDiv);
    spanDiv.appendChild(spanLeft);
    spanDiv.appendChild(spanRight);
    spanRight.appendChild(ratingStar);
    width100.appendChild(img);
    myTemplates.appendChild(box);

}



var myTemplates = document.getElementById("templates");

fetch("https://www.templify.no/api/api.php/template")
    .then(function(response) {
        return response.json();

    })
    .then(function(myApi) {
        console.log(myApi);

        for (var template of myApi){

            var url = new URL(window.location.href);
            var search = url.searchParams.get("search");
             console.log(search);

            if (search){

                if (template.title.toUpperCase().includes(search.toUpperCase())){
                    console.log("fant " + template.title);
                    showTemplate(template);

                } else {
                    console.log("Template did not match");
                }
            } else {
                showTemplate(template);
            }
        } // for-loop end

        var count = document.getElementById("templates").childElementCount; // Counts how many child objects there is
        console.log(count);
        if (count === 0){
            console.log("Nada Templates");
            var h1 = document.createElement("h1");
            var h1TextNode = document.createTextNode("No results for " + search);
            h1.appendChild(h1TextNode);
            myTemplates.appendChild(h1);
            // If there are no cards that matches search, write "No results for" and search word
        } // If count == 0 done

    });

// "https://api.urbanapp.no/v1/venues/near/49.616673/6.128208/12/age/99/"

