function buildSidebar(){
    var sidebarMenu = document.getElementById("sidebarMenu");
    var mobileMenu = document.getElementById("mobileMenu");

    fetch("https://www.templify.no/api/api.php/category")
        .then(function(response) {
            return response.json();

        })
        .then(function(myCats) {
            //  console.log(myCats);

            for (var cat of myCats){
                //   console.log(cat.name);

                var sidebarLi = document.createElement("li");
                sidebarLi.classList.add("items");

                var sidebarAttr = document.createElement("a");
                sidebarAttr.classList.add("black-a");
                sidebarAttr.href = "?cat=" + cat.id;
                sidebarAttr.text = cat.name;

                sidebarLi.appendChild(sidebarAttr);
                var mobileLi = sidebarLi.cloneNode(true);
                sidebarMenu.appendChild(sidebarLi);
                mobileMenu.appendChild(mobileLi);


            }
        })

}

buildSidebar();