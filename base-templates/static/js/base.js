function setPreviousPage(siteName) {
    document.cookie = "currentPage=" + siteName + "; path=/";
    console.log(document.cookie);
    
}