const menuBtn=document.getElementById("menuBtn");
const navMenu=document.getElementById("navMenu");
menuBtn.addEventListener("click",()=> {
    
    navMenu.classList.toggle("show");

    const icon= menuBtn.querySelector("i");

    if(navMenu.classList.contains("show")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-bars");

    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
}
);





/*  ------------------------close Mobile MENU--------------------*/


const navLinks = document.querySelectorAll(".nav_link");
navLinks.forEach(link =>{
    link.addEventListener("click",() =>{
        navMenu.classList.remove("show");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });
}

);



// ----------------------Dark /light mode---------

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("dark")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

            localStorage.setItem("theme", "dark");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

            localStorage.setItem("theme", "light");
        }
    });
}

/* ==========================================
   LOAD SAVED THEME
========================================== */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    const icon = themeBtn.querySelector("i");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}



