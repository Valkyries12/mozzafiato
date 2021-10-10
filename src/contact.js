import mapImage from "./assets/images/restaurant-location.png";

export default function createContact() {
  const div = document.createElement("div");
  div.setAttribute("class", "contact");
  
  //telefono 
  const p1 = document.createElement("p");
  p1.textContent = "📞 123 456 789";
  
  //adress
  const p2 = document.createElement("p");
  p2.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA";
  
  const img = new Image();
  img.src = mapImage;

  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(img);

  return div
};