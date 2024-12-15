import Heading from "./components/heading/heading.js";
import MountainImage from "./components/mountain-image/mountain-image.js";

const heading = new Heading();
heading.render("mountain");
const mountainImage = new MountainImage();
mountainImage.render();

import("HelloWorldApp/HelloWorldButton").then((HelloWorldButtonModule) => {
  const HelloWorldButton = HelloWorldButtonModule.default;
  const helloWorldButton = new HelloWorldButton();
  helloWorldButton.render();
});
