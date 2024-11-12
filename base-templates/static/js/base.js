function setPreviousPage(siteName) { 
    document.cookie = "currentPage=" + siteName + ";";
}

function setText() {
  let text = document.getElementById("old-title-extension-text");
  let newText = document.getElementById("title-extension-text")
  if (!getCookie("currentPage") == 'home') {
    text.textContent = " - " + getCookie("currentPage").toUpperCase();
  } else {
    text.textContent = ""; 
  }
  updateTitle(); 
  // console.log(getCookie("currentPage")); 
}

function updateTitle() {
  let titleStyle = document.getElementById("title").style;
  if (getCookie("currentPage") == "home") {
    titleStyle.left = "35vw";
  } else if (getCookie("currentPage") == "about") {
    titleStyle.left = "28.5vw";
  } else if (getCookie("currentPage") == "projects") {
    titleStyle.left = "26.5vw";
  } else if (getCookie("currentPage") == "contact") {
    titleStyle.left = "27vw";
  }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }