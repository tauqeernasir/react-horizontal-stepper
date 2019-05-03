import React from "react";
import ReactDOM from "react-dom";

import { Stepper } from "./lib";

const steps = [
  "Search a shop",
  "Fill out form",
  "Book appoinment",
  "Confirm your booking"
];

ReactDOM.render(
  <div>
    <Stepper steps={steps} />
  </div>,
  document.getElementById("root")
);
