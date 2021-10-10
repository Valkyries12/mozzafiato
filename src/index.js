import createWebsite from "./website.js";
import createHome from "./home.js";
import createMenu from "./menu.js";
import data from "./data.json";

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
}
  
document.querySelector("#btnHome").addEventListener("click", createHomeSection);

document.querySelector("#btnMenu").addEventListener("click", () => createMenuSection(data));

