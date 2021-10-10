import createWebsite from "./website.js";
import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";
import data from "./assets/data.json";


import "./styles.css";

function initializeApp() {
    createWebsite();
    createContactSection();
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
  
document.querySelector("#btnHome").addEventListener("click", createHomeSection);

document.querySelector("#btnMenu").addEventListener("click", () => createMenuSection(data));

document.querySelector("#btnContact").addEventListener("click", () => createContactSection);

