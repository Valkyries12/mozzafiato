
export default function createWebsite() {
  //creo header y le pongo clase
  const header = document.createElement("header");
  header.setAttribute("class", "header");
  //creo titulo y le pongo clase
  const h1 = document.createElement("h1");
  h1.textContent = "mozzafiato";
  h1.setAttribute("class", "main-title");
  //creo nav y le pongo clase
  const nav = document.createElement("nav");
  nav.setAttribute("class", "nav");
  //creo botones
  const btnHome = document.createElement("button");
  btnHome.setAttribute("id", "btnHome");
  btnHome.setAttribute("class", "nav-btn");
  btnHome.textContent = "home";
  const btnMenu = document.createElement("button");
  btnMenu.setAttribute("id", "btnMenu");
  btnMenu.setAttribute("class", "nav-btn");
  btnMenu.textContent = "menu";
  const btnContact = document.createElement("button");
  btnContact.setAttribute("id", "btnContact");
  btnContact.setAttribute("class", "nav-btn");
  btnContact.textContent = "contact";
  //agrego al nav los botones
  nav.appendChild(btnHome);
  nav.appendChild(btnMenu);
  nav.appendChild(btnContact);
  //agrego titulo y nav al header
  header.appendChild(h1);
  header.appendChild(nav);
  //creo main
  const main = document.createElement("main");
  main.setAttribute("class", "main");
  //creo el footer
  const footer = document.createElement("footer");
  footer.setAttribute("class", "footer");
  footer.textContent = "Copyright \&copy\; 2021 Valkyries12";
  //agrego al contenedor raiz el layout principal creado 
  const root = document.querySelector("#content");
  root.appendChild(header);
  root.appendChild(main);
  root.appendChild(footer);

  //createHomeSection();
};





