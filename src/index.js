import "./styles.css";
import { pageLoad  } from "./initial-page-load.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

//initial load;
pageLoad();

const contentDiv = document.querySelector("#content");
const navButtons = document.querySelector(".nav-btn");


navButtons.addEventListener("click", (e) => {
    if(e.target.classList.contains("home")){
        contentDiv.textContent = '';
        pageLoad();
    }

    if(e.target.classList.contains("menu")){
        contentDiv.textContent = '';
        loadMenu();
    }

    if(e.target.classList.contains("contact")){
        contentDiv.textContent = '';
        loadContact();
    }
})
