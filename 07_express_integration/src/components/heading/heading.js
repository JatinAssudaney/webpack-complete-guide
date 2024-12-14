import "./heading.css";

class Heading {
  render(pageName) {
    const h1 = document.createElement("h1");
    h1.innerText = `Webpack is Awesome. This is ${pageName} page`;
    document.body.appendChild(h1);
  }
}

export default Heading;
