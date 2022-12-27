import React from "react";
import {render as rtlRender} from "@testing-library/react";
import { Provider } from "react-redux";


export const renderWithProvider = (ui: any, propStore: any, {...renderOptions} = {}) => {
    const Wrapper = ({children}:any) => (<Provider store={propStore}>{children}</Provider>);

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
};

export * from "@testing-library/react";
export * from "@testing-library/jest-dom";

