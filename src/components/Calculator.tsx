import React from "react";
import "./Calculator.scss";
import { Display } from "./Display";

type CalculatorState = {
    input: string;
    output: string;
};

export default class Calculator extends React.Component<{}, CalculatorState> {
    render() {
        return (
            <div className="Calculator">
                <Display input={this.state.input} output={this.state.output} />
                {/* Buttons are layed out from top left to bottom right, in order */}
                <button type="button" id="clear">
                    AC
                </button>
                <button type="button" id="divide">
                    /
                </button>

                <button type="button" id="multiply">
                    *
                </button>
                <button type="button" id="seven">
                    7
                </button>
                <button type="button" id="eight">
                    8
                </button>
                <button type="button" id="nine">
                    9
                </button>
                <button type="button" id="substract">
                    -
                </button>
                <button type="button" id="four">
                    4
                </button>
                <button type="button" id="five">
                    5
                </button>
                <button type="button" id="six">
                    6
                </button>
                <button type="button" id="add">
                    +
                </button>
                <button type="button" id="one">
                    1
                </button>
                <button type="button" id="two">
                    2
                </button>
                <button type="button" id="three">
                    3
                </button>
                <button type="button" id="equals">
                    =
                </button>
                <button type="button" id="zero">
                    0
                </button>
                <button type="button" id="decimal">
                    .
                </button>
            </div>
        );
    }
}
