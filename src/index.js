import createWebsite from "./website.js";
import createHome from "./home.js";
//import createHomeSection from "./website.js";
import "./styles.css";

function initializeApp() {
    createWebsite();
    createHomeSection();
};

initializeApp();

function createHomeSection() {
    document.querySelector(".main").innerHTML = "";
    const homeMenu = createHome();
    const main = document.querySelector(".main");
    main.appendChild(homeMenu);
};
  
document.querySelector("#btnHome").addEventListener("click", createHomeSection);

