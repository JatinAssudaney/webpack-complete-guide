import Mountain from "./mountain.jpg";
function addImage() {
  const img = document.createElement("img");
  img.alt = "mountain";
  img.width = 300;
  img.src = Mountain;
  document.body.appendChild(img);
}

export default addImage;
