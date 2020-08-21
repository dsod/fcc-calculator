import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

export const Display: FunctionComponent<{}> = () => {
    const input = useSelector((state: RootState) => state.calculator.input);
    const output = useSelector((state: RootState) => state.calculator.output);
    return (
        <div id="display-wrapper">
            <div id="expression">{output}</div>
            <hr />
            <div id="display">{input ? input : "0"}</div>
        </div>
    );
};
