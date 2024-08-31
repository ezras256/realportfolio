function setPreviousPage(siteName) { 
    document.cookie = "currentPage=" + siteName + ";";
}

function setText() {
  let text = document.getElementById("old-title-extension-text");
  
  text.textContent = " - " + getCookie("currentPage").toUpperCase();
  updateTitle(); 
  console.log(getCookie("currentPage")); 

}

function updateTitle() {
  let titleStyle = document.getElementById("title").style;
  if (getCookie("currentPage") == "about") {
    titleStyle.left = "28.5vw";
  } else if (getCookie("currentPage") == "projects") {
    titleStyle.left = "26.5vw";
  } else if (getCookie("currentPage") == "contact") {
    titleStyle.left = "27vw";
  } else {
    titleStyle.left = "35vw";
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