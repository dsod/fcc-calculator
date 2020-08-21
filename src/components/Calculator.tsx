import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { clearInput, solveEquation, addNumber, addOperator, addDecimal, replaceOperator } from "../store/calculator";

import { Display } from "./Display/Display";
import { History } from "./History/History";

import "../styles/Calculator.scss";

export const Calculator: React.FC = () => {
    const dispatch = useDispatch();
    const lastClickedButton = useSelector((state: RootState) => state.calculator.lastClickedButton);
    const input = useSelector((state: RootState) => state.calculator.input);
    const output = useSelector((state: RootState) => state.calculator.output);

    const handleClearClick = () => {
        dispatch(clearInput());
    };

    const handleNumberClick = (number: string) => {
        if (lastClickedButton === "equals") {
            dispatch(clearInput());
            dispatch(addNumber(number));
        } else if (input.length === 1 && input === "0") {
            console.log("Cannot add more than one '0' in the beginning of an expression.");
        } else {
            dispatch(addNumber(number));
        }
    };

    const handleDecimalClick = () => {
        if (lastClickedButton === "equals") {
            dispatch(clearInput());
            dispatch(addDecimal("."));
        } else if (!input) {
            dispatch(addDecimal("0."));
        } else if (input.includes(".")) {
            console.log("Cannot add more than one decimal in the same number.");
        } else {
            dispatch(addDecimal("."));
        }
    };

    const handleEqualsClick = () => {
        try {
            // eslint-disable-next-line
            const result = String(eval(output + input));
            dispatch(solveEquation(result));
        } catch (SyntaxError) {
            console.log("Invalid expression.");
        } finally {
        }
    };

    const handleOperatorClick = (operator: string) => {
        const operatorWithWhitespace = ` ${operator} `;
        if (lastClickedButton === "equals") {
            const currentInput = input;
            dispatch(clearInput());
            dispatch(addNumber(currentInput));
            dispatch(addOperator(operatorWithWhitespace));
        } else if (lastClickedButton === "operator") {
            if (operator === "-" && output.trimEnd().endsWith("-")) {
                console.log("Cannot add more than one '-' in a row.");
            } else if (operator === "-" && !output.trimEnd().endsWith("-")) {
                dispatch(addOperator(" -"));
            } else if (output.trimEnd().endsWith("-")) {
                dispatch(replaceOperator(operator, 2));
            } else {
                dispatch(replaceOperator(operator, 1));
            }
        } else {
            dispatch(addOperator(operatorWithWhitespace));
        }
    };

    return (
        <main>
            <section className="Calculator">
                <Display />
                {/* Buttons are layed out from top left to bottom right, in order */}
                <button type="button" id="clear" onClick={handleClearClick}>
                    AC
                </button>
                <button type="button" id="divide" onClick={() => handleOperatorClick("/")}>
                    /
                </button>

                <button type="button" id="multiply" onClick={() => handleOperatorClick("*")}>
                    *
                </button>
                <button type="button" id="seven" onClick={() => handleNumberClick("7")}>
                    7
                </button>
                <button type="button" id="eight" onClick={() => handleNumberClick("8")}>
                    8
                </button>
                <button type="button" id="nine" onClick={() => handleNumberClick("9")}>
                    9
                </button>
                <button type="button" id="subtract" onClick={() => handleOperatorClick("-")}>
                    -
                </button>
                <button type="button" id="four" onClick={() => handleNumberClick("4")}>
                    4
                </button>
                <button type="button" id="five" onClick={() => handleNumberClick("5")}>
                    5
                </button>
                <button type="button" id="six" onClick={() => handleNumberClick("6")}>
                    6
                </button>
                <button type="button" id="add" onClick={() => handleOperatorClick("+")}>
                    +
                </button>
                <button type="button" id="one" onClick={() => handleNumberClick("1")}>
                    1
                </button>
                <button type="button" id="two" onClick={() => handleNumberClick("2")}>
                    2
                </button>
                <button type="button" id="three" onClick={() => handleNumberClick("3")}>
                    3
                </button>
                <button type="button" id="equals" onClick={handleEqualsClick}>
                    =
                </button>
                <button type="button" id="zero" onClick={() => handleNumberClick("0")}>
                    0
                </button>
                <button type="button" id="decimal" onClick={handleDecimalClick}>
                    .
                </button>
            </section>
            <History />
        </main>
    );
};
