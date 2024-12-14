import addImage from "./add-image.js";
import Heading from "./components/heading/heading.js";
import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";

// addImage();

const heading = new Heading();
heading.render();

const helloWorld = new HelloWorldButton();
helloWorld.render();
