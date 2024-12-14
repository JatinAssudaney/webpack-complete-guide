import "./heading.css";

class Heading {
  render() {
    const h1 = document.createElement("h1");
    h1.innerText = "Webpack is Awesome";
    document.body.appendChild(h1);
  }
}

export default Heading;
