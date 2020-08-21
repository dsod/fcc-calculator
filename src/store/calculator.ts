interface History {
    equation: string;
}

export interface CalculatorState {
    input: string;
    output: string;
    history: History[];
    lastClickedButton: string;
}

const initialState: CalculatorState = {
    input: "",
    output: "",
    history: [],
    lastClickedButton: "",
};

// Actions

const ADD_NUMBER = "calculator/ADD_NUMBER";
const ADD_OPERATOR = "calculator/ADD_OPERATOR";
const REPLACE_OPERATOR = "calculator/REPLACE_OPERATOR";
const ADD_DECIMAL = "calculator/ADD_DECIMAL";
const CLEAR = "calculator/CLEAR";
const EQUALS = "calculator/EQUALS";

export const addNumber = (number: string) => {
    return {
        type: ADD_NUMBER,
        payload: number,
    } as const;
};

export const addOperator = (operator: string) => {
    return {
        type: ADD_OPERATOR,
        payload: operator,
    } as const;
};

export const replaceOperator = (newOperator: string, removeOperators: number) => {
    return {
        type: REPLACE_OPERATOR,
        payload: newOperator,
        removeOperators: removeOperators,
    } as const;
};

export const addDecimal = (s: string) => {
    return {
        type: ADD_DECIMAL,
        payload: s,
    } as const;
};

export const clearInput = () => {
    return {
        type: CLEAR,
    } as const;
};

export const solveEquation = (result: string) => {
    return {
        type: EQUALS,
        payload: result,
    } as const;
};

type CalculatorActionTypes =
    | ReturnType<typeof addNumber>
    | ReturnType<typeof addOperator>
    | ReturnType<typeof replaceOperator>
    | ReturnType<typeof addDecimal>
    | ReturnType<typeof clearInput>
    | ReturnType<typeof solveEquation>;

// Reducers

export const calculatorReducer = (state = initialState, action: CalculatorActionTypes): CalculatorState => {
    switch (action.type) {
        case ADD_NUMBER:
            return Object.assign({}, state, {
                input: state.input + action.payload,
                lastClickedButton: "number",
            });

        case ADD_OPERATOR:
            return Object.assign({}, state, {
                input: "",
                output: state.output + state.input + action.payload,
                lastClickedButton: "operator",
            });

        case REPLACE_OPERATOR:
            return Object.assign({}, state, {
                output: `${state.output.slice(0, -action.removeOperators * 2)}${action.payload} `,
                lastClickedButton: "operator",
            });

        case ADD_DECIMAL:
            return Object.assign({}, state, {
                input: state.input + action.payload,
                lastClickedButton: "decimal",
            });

        case CLEAR:
            return Object.assign({}, state, { input: "", output: "", lastClickedButton: "clear" });

        case EQUALS:
            return Object.assign({}, state, {
                input: action.payload,
                output: `${state.output}${state.input} =`,
                history: [...state.history, { equation: `${state.output}${state.input} = ${action.payload}` }],
                lastClickedButton: "equals",
            });

        default:
            return state;
    }
};
