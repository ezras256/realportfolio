function setPreviousPage(siteName) {
    prev = sessionStorage.getItem("lastVisited");
    sessionStorage.setItem("prev", prev); 
    sessionStorage.setItem("lastVisited", siteName);

}

function setText() {
    let text = document.getElementById("old-title-extension-text");
    if (sessionStorage.getItem("prev") != 'home') {
        text.textContent = " - " + sessionStorage.getItem("prev").toUpperCase();
    } else {
        text.textContent = "";
    }

    updateTitle(); 
    
}

function updateTitle() {
    let titleStyle = document.getElementById("title").style;

    if (sessionStorage.getItem("prev") == 'home') {
        titleStyle.left = "35vw";
    } else if (sessionStorage.getItem("prev") == 'about') {
        titleStyle.left = "28.5vw";
    } else if (sessionStorage.getItem("prev") == 'projects') {
        titleStyle.left = "26.5vw";
    } else if (sessionStorage.getItem("prev") == 'contact') {
        titleStyle.left = "27vw";
    } else {
        console.warn("Transitions broken :("); 
    }

    updateArrow(); 
}

function updateArrow() {
    let active = sessionStorage.getItem("lastVisited"); 
    let downButton = document.getElementById("down-button"); 
    let include = ['projects', 'about', 'contact']; 
    console.log(active); 
    if ((active == 'home' || active == null) && active != sessionStorage.getItem("prev")) {
        downButton.style.scale = "1";
        downButton.style.animation = "scale-down 0.5s ease 0.75s forwards"; 
    } else if (include.includes(active) && include.includes(sessionStorage.getItem("prev"))) {
        downButton.style.scale = "1"; 
        downButton.style.animationPlayState = "paused"; 
    }
}

function initContent() {
    let pageContentHolder = document.getElementById("page-content"); 
    let contentContainer = document.getElementById("content-container"); 

    pageContentHolder.appendChild(contentContainer); 
}