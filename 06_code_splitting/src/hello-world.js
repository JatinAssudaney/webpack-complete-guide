import Heading from "./components/heading/heading.js";
import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
// import _ from "lodash";
// import upperFirst from "lodash/upperFirst.js";
import React from "react";

const heading = new Heading();
// heading.render(_.upperFirst("hello-world"));
// heading.render(upperFirst("hello-world"));
heading.render("hello-world");

const helloWorld = new HelloWorldButton();
helloWorld.render();
