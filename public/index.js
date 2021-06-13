const navMenu = document.getElementById("nav-menu")
const navClose = document.getElementById("close-menu")
const menuBtn = document.getElementById("menu-btn")

menuBtn.addEventListener('click',() => {
    navMenu.classList.add("show-menu")
    console.log("hellll")
})

navClose.addEventListener('click',() => {
    navMenu.classList.remove("show-menu")
})


const navlink = document.querySelectorAll(".nav-link");
 

function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show")
}

navlink.forEach(n => n.addEventListener("click", linkAction));