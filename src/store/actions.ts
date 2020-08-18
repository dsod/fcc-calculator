import { CalculatorState, CalculatorActionTypes, UPDATE_INPUT } from "./types";

export const updateInput = (newInput: CalculatorState["input"]): CalculatorActionTypes => {
    return {
        type: UPDATE_INPUT,
        payload: newInput,
    };
};
