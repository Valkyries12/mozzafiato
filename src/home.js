import cheffImage from "./assets/images/chef.png"

export default createHome = () => {
  const div = document.createElement("div");
  div.setAttribute("class", "home");
  
  const p1 = document.createElement("p").textContent = "best pizza in your country";
  const p2 = document.createElement("p").textContent = "made with passion since 1908";
  const p3 = document.createElement("p").textContent = "order online or visit us!";

  const figure = document.createElement("figure");
  figure.setAttribute("class", "cheff")
  const img = document.createElement("img").src = cheffImage;

  figure.appendChild(img);

  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(figure);
  div.appendChild(p3);

  return div
};