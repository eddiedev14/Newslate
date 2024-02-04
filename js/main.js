const searchIcon = document.querySelector(".search-icon")
const menuIcon = document.querySelector(".menu-icon")
const linksItem = document.querySelectorAll(".nav__links__item")

document.addEventListener("DOMContentLoaded", loadEvents)

function loadEvents() {
    searchIcon.addEventListener("click", showInputModal)
    menuIcon.addEventListener("click", toggleNav)
    linksItem.forEach(link => {
        link.addEventListener("click", toggleNav)
    });
}

function showInputModal() {
    Swal.fire({
        title: "Busca un Artículo",
        input: "search",
        inputAttributes: {
          autocapitalize: "off",
          required: "true",
        },
        showCancelButton: true,
        confirmButtonText: "Buscar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: "success",
                title: "Felicitaciones",
                text: "¡Has Buscado el Artículo Correctamente!",
            });
        }
      });
}

function toggleNav() {
    document.querySelector('.nav__links').classList.toggle("active")
    menuIcon.classList.toggle("light")

    //We toggle on the icon name
    if(menuIcon.name === "menu"){
        menuIcon.name = "close"
    }else{
        menuIcon.name = "menu"
    }
}