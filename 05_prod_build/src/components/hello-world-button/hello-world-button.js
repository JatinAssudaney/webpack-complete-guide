// import "./hello-world-button.css";
import "./hello-world-button.scss";

class HelloWorldButton {
  buttonCSSClass = "hello-world-text";

  render() {
    const btn = document.createElement("button");
    btn.innerText = "Hello World";
    btn.classList.add("hello-world-button");
    btn.onclick = () => {
      const p = document.createElement("p");
      p.innerText = "Hello World";
      p.classList.add(this.buttonCSSClass);

      document.body.appendChild(p);
    };
    document.body.appendChild(btn);
  }
}

export default HelloWorldButton;
