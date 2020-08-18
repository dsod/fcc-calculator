import React from "react";
import ReactDOM from "react-dom";
import { connect, Provider, ConnectedProps } from "react-redux";
import { createStore, combineReducers } from "redux";
import "./index.scss";
import Calculator from "./components/Calculator";

import { calculatorReducer } from "./store/reducers";

const rootReducer = combineReducers({
    calculator: calculatorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Calculator />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
