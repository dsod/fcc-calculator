import React, { FunctionComponent } from "react";
import CalculatorState from "./Calculator";

type DisplayProps = CalculatorState;

export const Display: FunctionComponent<DisplayProps> = ({ input, output }) => {
  return (
    <div id="display">
      <div id="output">da</div>
      <hr />
      <div id="input">da</div>
    </div>
  );
};
