


function showTemplate(template){

    var box = document.createElement("div"); // Creates a div called box
    box.classList.add("float-left");
    box.classList.add("col-m-2"); // Adds class "col-sm-4" to box div
    box.classList.add("col-t-25");
    box.classList.add("col-sm-4");
    box.classList.add("items1");


    var attribute = document.createElement("a"); // Creates an a element called attribute
    attribute.classList.add("black-a"); // Adds class "btn" to attribute
    attribute.href = "product.html?id=" + template.id; // Gives the attribute an href that should contain "card-specific.html?id=" and the selected card´s id.


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
    spanLeft.classList.add("float-left");

    var spanRight = document.createElement("span");
    spanLeft.classList.add("float-right");


    box.appendChild(attribute);
    attribute.appendChild(img);
    attribute.appendChild(h3);
    attribute.appendChild(spanDiv);
    spanDiv.appendChild(spanLeft);
    spanDiv.appendChild(spanRight);
    myTemplates.appendChild(box);

}

var myTemplates = document.getElementById("templates");

fetch("https://www.templify.no/api/api.php/template")
    .then(function(response) {
        return response.json();

    })
    .then(function(myApi) {
        console.log(myApi);
        for (var template of myApi.templates){

            var url = new URL(window.location.href);
            var search = url.searchParams.get("search");
            console.log()

            if (search){

                if (template.title.toUpperCase().includes(search.toUpperCase())){

                    showTemplate(template);

                } else {
                    console.log("Template did not match");
                }
            } else {
                showTemplate(template);
            }
        } // for-loop end

      //  window.localStorage.setItem("liste",JSON.stringify(list));
    });

// "https://api.urbanapp.no/v1/venues/near/49.616673/6.128208/12/age/99/"

