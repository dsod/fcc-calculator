import { combineReducers, createStore } from "redux";
import { calculatorReducer } from "./calculator";

export const rootReducer = combineReducers({
    calculator: calculatorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
