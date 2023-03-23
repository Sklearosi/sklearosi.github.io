let burger = document.querySelector(".burger")
let menu = document.querySelector(".menu")
let header = document.querySelector("header")

burger.addEventListener("click", function(){
    menu.classList.toggle("active")
    header.classList.toggle("active1")
})

function homeBtn(){
    window.location.href = "index.html"
}

function offeringBtn(){
    window.location.href = "offering.html"
}

function projectsBtn(){
    window.location.href = "projects.html"
}

function infoBtn(){
    window.location.href = "info.html"
}

function contactsBtn(){
    window.location.href = "contacts.html"
}