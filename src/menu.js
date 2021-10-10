function createCard(item) {
  //creo card
  const card = document.createElement("div");
  card.setAttribute("class", "card-pizza");
  //creo la img
  const img = new Image();
  //const imgurl = require(item.imageSrc);
  img.src = loadImage(item.name);
  img.alt = item.name;
  //creo titulo
  const titulo = document.createElement("p");
  titulo.setAttribute("class", "pizza-name");
  titulo.textContent = item.name;
  //creo descripcion
  const description = document.createElement("p");
  description.setAttribute("class", "pizza-description");
  description.textContent = item.ingredients

  card.appendChild(img);
  card.appendChild(titulo);
  card.appendChild(description);
  return card
};

function loadImage(name) {
  return require(`./assets/images/pizzas/${name.toLowerCase()}.png`);
};

//var icon = loadIcon();
export default function createMenu(data) {
  //creo div .menu
  const menu = document.createElement("div");
  menu.setAttribute("class", "menu");
  //creo las cards pizzas
  data.map(item => {
    const card = createCard(item);
    menu.appendChild(card);
  });
  return menu
};
