function setPreviousPage(siteName) { 
    // alert(getCookie("currentPage")); 
    if (siteName == "home") {
      document.getElementById("old-title-extension-text").textContent = "";
    } else {
      document.getElementById("old-title-extension-text").textContent = " - " + getCookie("currentPage").toUpperCase();
    }

    document.cookie = "currentPage=" + siteName + "; path=/";

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