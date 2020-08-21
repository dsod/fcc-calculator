import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";

import "./styles/index.scss";
import { Calculator } from "./components/Calculator";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Calculator />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
