import { CalculatorState, CalculatorActionTypes, UPDATE_INPUT } from "./types";

const initialState: CalculatorState = {
    currentExpression: "0",
    history: [],
    input: "0",
};

export const calculatorReducer = (state = initialState, action: CalculatorActionTypes) => {
    switch (action.type) {
        case UPDATE_INPUT:
            return Object.assign({}, state, { input: state.input + action.payload });

        default:
            return state;
    }
};
