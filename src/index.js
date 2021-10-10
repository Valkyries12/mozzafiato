import createWebsite from "./website.js";
import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";
//import data from "./assets/data.json";


import "./styles.css";

function initializeApp() {
    createWebsite();
    createHomeSection();
};

initializeApp();

function createHomeSection() {
    document.querySelector(".main").innerHTML = "";
    const homeTab = createHome();
    const main = document.querySelector(".main");
    main.appendChild(homeTab);
};

function createMenuSection(data) {
    document.querySelector(".main").innerHTML = "";
    const menuTab = createMenu(data);
    const main = document.querySelector(".main");
    main.appendChild(menuTab);
};

function createContactSection() {
    document.querySelector(".main").innerHTML = "";
    const contactTab = createContact();
    const main = document.querySelector(".main");
    main.appendChild(contactTab);
};
  

const changeTabs = function(e, data) {
    if(e.target.id == "btnHome") {
        createHomeSection();
    };
    if(e.target.id == "btnMenu") {
        createMenuSection(data);
    };
    if(e.target.id == "btnContact") {
        createContactSection();
    };
};

document.querySelector(".nav").addEventListener("click", function(e,data) {
    changeTabs(e, require("./assets/data.json"));
});
