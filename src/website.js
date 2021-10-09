import createHome from "./home.js";

export default createWebsite = () => {
  const homeMenu = createHome();
  const main = document.querySelector(".main");
  main.appendChild(homeMenu);
};
