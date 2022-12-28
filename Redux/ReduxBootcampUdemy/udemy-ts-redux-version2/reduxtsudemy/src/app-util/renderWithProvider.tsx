import React, {PropsWithChildren} from "react";
import {render, render as rtlRender} from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../state/reducers/counterReducer";
import { authSlice } from "../state/reducers/authReducer";
import type { PreloadedState } from "@reduxjs/toolkit";
import type { RenderOptions } from "@testing-library/react";
import type { RootState, store, AppStore } from "../state/store";
import { setupStore } from "../state/store";


export const renderWithProvider = (ui: any, propStore: any, {...renderOptions} = {}) => {
    const Wrapper = ({children}:any) => (<Provider store={propStore}>{children}</Provider>);

    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
};

// This type interface extends the default options for render from RTL, as well as 
// allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>
    store?: AppStore
}


export const renderWithProvidersSlices = (
    ui: React.ReactElement,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = setupStore(preloadedState),
        ...renderOptions
    }: ExtendedRenderOptions = {}

) => {
    function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>
    }
    // Return an object with the store and all of RTL's query functions
    return {store,...render(ui, {wrapper: Wrapper, ...renderOptions})}
}

export * from "@testing-library/react";
export * from "@testing-library/jest-dom";

