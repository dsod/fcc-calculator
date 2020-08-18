export interface History {
    expression: string;
}

export interface CalculatorState {
    input: string;
    currentExpression: string;
    history: History[];
}

export const UPDATE_INPUT = "UPDATE_INPUT";
export const CLEAR = "CLEAR";
export const EQUALS = "EQUALS";
export const DIVIDE = "DIVIDE";
export const MULTIPLY = "MULTIPLY";
export const ADD = "ADD";
export const SUBSTRACT = "SUBSTRACT";

interface UpdateInputAction {
    type: typeof UPDATE_INPUT;
    payload: CalculatorState["input"];
}

export type CalculatorActionTypes = UpdateInputAction;
