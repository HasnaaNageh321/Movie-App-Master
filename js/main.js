document.addEventListener("DOMContentLoaded", function () {
    let Movie = document.getElementById('Movie');

    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");

        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
            Movie.style.color = "black"; 
        } else {
            navbar.classList.remove("navbar-scrolled");
            Movie.style.color = "white";  
        }
    });
});
