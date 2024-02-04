const searchIcon = document.querySelector(".search-icon")
const menuIcon = document.querySelector(".menu-icon")
const linksItem = document.querySelectorAll(".nav__links__item")
const firstLinkItem = document.querySelector(".nav__links__item a")
const ionIcons = document.querySelectorAll("ion-icon");
const hero = document.querySelector(".hero");
const searchForm = document.querySelector(".nav__form");
const searchField = document.querySelector(".nav__form__field")

document.addEventListener("DOMContentLoaded", loadEvents)

function loadEvents() {
    verifyViewport();
    window.addEventListener("resize", verifyViewport)
    searchForm.addEventListener("submit", showModal)
}

function verifyViewport() {
    viewportWidth = window.innerWidth;
    
    //Reseteamos la página
    if (viewportWidth >= 1000) {
        linksItem.forEach(link => {
            link.firstElementChild.tabIndex = "0";
        });
    
        ionIcons.forEach(icon => {
            icon.style.zIndex = "0";
        });
    }else{
        searchIcon.addEventListener("click", showInputModal)
        menuIcon.addEventListener("click", toggleNav)
        linksItem.forEach(link => {
            link.addEventListener("click", toggleNav)
        });
    }
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
    const navLinks = document.querySelector('.nav__links');
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("light");

    const isMenuIconClose = menuIcon.firstElementChild.name === "close";
    menuIcon.firstElementChild.name = isMenuIconClose ? "menu" : "close";
    searchIcon.tabIndex = isMenuIconClose ? "0" : "-1";

    linksItem.forEach(link => {
        link.firstElementChild.tabIndex = isMenuIconClose ? "-1" : "0";
    });

    ionIcons.forEach(icon => {
        icon.style.zIndex = isMenuIconClose ? "0" : "-1";
    });

    if (!isMenuIconClose) {
        firstLinkItem.focus();
    }
}

function showModal(e) {
    e.preventDefault();
    Swal.fire({
        icon: "success",
        title: "Felicitaciones",
        text: "¡Has Buscado el Artículo Correctamente!",
    });
    searchField.value = "";
}