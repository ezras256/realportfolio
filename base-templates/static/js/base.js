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

    if (sessionStorage.getItem("prev") == sessionStorage.getItem("lastVisited")) {
        text.style.animationPlayState = "paused"; 
        document.getElementById("title-extension").children.item(0).style.animationPlayState = "paused"; 
    } else {
        text.style.animationPlayState = "running"; 
        document.getElementById("title-extension").children.item(0).style.animationPlayState = "running"; 
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
}