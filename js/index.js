// FETCH HEADER
fetch("../fetch/header.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector("header").innerHTML = data;
    })
    .catch(error => {
        console.error("Error al cargar el header:", error);
    });

// DISPLAY NAV
function toggleNav() {
    let nav = document.querySelector(".nav-apartados");
    nav.classList.toggle("active");
}

// FETCH FOOTER
fetch("../fetch/footer.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    })
    .catch(error => {
        console.error("Error al cargar el footer:", error);
    });