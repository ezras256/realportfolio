const sidebar = document.getElementById("sidebar")
const sidebarButton = document.getElementById("button")

function checkSidebar() {
    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active")
        void sidebar.offsetWidth;
        sidebar.classList.add("inactive")

        sidebarButton.classList.remove("active")
        void sidebarButton.offsetWidth;
        sidebarButton.classList.add("inactive")
    } else {
        sidebar.classList.remove("inactive")
        void sidebar.offsetWidth;
        sidebar.classList.add("active")

        sidebarButton.classList.remove("inactive")
        void sidebarButton.offsetWidth;
        sidebarButton.classList.add("active")
    }
}