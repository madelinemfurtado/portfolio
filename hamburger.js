const hamburger = document.querySelector("#hamburger");

const navlist = document.querySelector("#navlist");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("open");
    navlist.classList.toggle("open");
});
