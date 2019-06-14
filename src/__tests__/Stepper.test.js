import React from "react";
import { Stepper } from "../lib/Stepper";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<Stepper steps={["step 1", "step 2"]} currentStep={1} onItemClick={() => { }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
