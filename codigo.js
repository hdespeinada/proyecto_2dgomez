console.log("se muestra el codigo");

var boton = document.getElementById("b");

function showMenu() {
    var menu = document.getElementById("opcs-menu");

    if(menu.classList.contains("disabled-menu")){
        console.log("mostrar");   
        menu.classList.remove("disabled-menu");
        menu.classList.add("enabled-menu");
    }
    else{
        console.log("ocultar");
    }

}

boton.addEventListener("click", showMenu);
