links = document.getElementsByClassName("nav-links")[0];
btns = document.getElementsByClassName("nav-btns")[0];
nav_btn = document.getElementsByClassName("nav-toggler")[0];
var open = false;
const toggle = () => {
    if(open){
        nav_btn.classList.remove("fa-close");
        nav_btn.classList.add("fa-bars");
        btns.style.display = "none";
        links.style.display = "none";
        open = false;
    }else{
        nav_btn.classList.add("fa-close");
        nav_btn.classList.remove("fa-bars");
        btns.style.display = "flex";
        links.style.display = "flex";
        open = true;
    }
}
const check_screen = () =>{
    if(window.innerWidth >= 861){
        btns.style.display = "flex";
        links.style.display = "flex";
    }else{
        if(!open){
            btns.style.display = "none";
            links.style.display = "none";
        }
    }
}