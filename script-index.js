
fetch("https://www.templify.no/api/api.php/template")
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);

    });

// "https://api.urbanapp.no/v1/venues/near/49.616673/6.128208/12/age/99/"



function showTemplates(template) {



    var box = document.createElement("div")

}
