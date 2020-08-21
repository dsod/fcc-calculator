import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

export const History: React.FC = () => {
    const history = useSelector((state: RootState) => state.calculator.history);
    const calculatorHistory = history.map((item) => <p>{item.equation}</p>);
    return <aside className="History">{calculatorHistory}</aside>;
};
