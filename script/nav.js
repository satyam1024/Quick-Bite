const menu = document.querySelector(".menu");
const darkMode = document.querySelector(".dark-mode-toggle");

menu.addEventListener("click", ()=> {
    toggleDarkMode();
})
darkMode.addEventListener("click", ()=> {
    toggleDarkMode();
})
function controlMenu() {
    const navlinks = document.querySelector(".nav-links");
    if (navlinks.classList.contains("active")) {
        navlinks.classList.remove("active");
    }
    else {
        navlinks.classList.add("active");
    }
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('dark-mode-icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        
    } else {
        icon.classList.add('fa-sun'); 
        icon.classList.remove('fa-moon');
        
    }
}

function controlLinks() {
    const links = document.querySelectorAll(".link");
    const navlinks = document.querySelector(".nav-links");
    links.forEach(link => {
        link.addEventListener("click", ()=> {
            if (navlinks.classList.contains("active")) {
                navlinks.classList.remove("active")
            }
        })
    });
}

controlLinks();


