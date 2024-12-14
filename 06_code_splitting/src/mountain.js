import Heading from "./components/heading/heading.js";
import MountainImage from "./components/mountain-image/mountain-image.js";
// import _ from "lodash";
// import upperFirst from "lodash/upperFirst.js";
import React from "react";

const heading = new Heading();
// heading.render(_.upperFirst("mountain"));
// heading.render(upperFirst("mountain"));
heading.render("mountain");

const mountainImage = new MountainImage();
mountainImage.render();
