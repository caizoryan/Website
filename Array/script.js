const menu = document.querySelector(".hamburger");
const nav = document.querySelector(".mobile-nav");
const close = document.querySelector(".close");

menu.addEventListener("click", add);

function add(){
    console.log("click");
    nav.classList.add("open-nav");
    nav.classList.add("smooth");

}

close.addEventListener("click", remove);

function remove(){
    nav.classList.remove("open-nav");
}
