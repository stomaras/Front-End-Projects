import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {storeState} from "./app-util/initialStoreState";
import {renderWithProvider} from "./app-util/renderWithProvider";
import { store } from './state/store';


beforeEach(() => {
  renderWithProvider(<App />, store);
})
describe("Renders App  Correctly UI Testing", () => {
  it("Expect header heading to be in the document", () => {
    const headerRedux = screen.getByText(/redux auth/i);
    expect(headerRedux).toBeInTheDocument();
  });
  it("Expect Counter Component and sub features to be in the document", () => {
    const reduxCounter = screen.getByRole('heading', {  name: /redux counter/i});
    expect(reduxCounter).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', {  name: /increment/i});
    expect(incrementButton).toBeInTheDocument();

    const increaseButton = screen.getByRole('button', {  name: /increase by 5/i});
    expect(increaseButton).toBeInTheDocument();

    const decreaseButton = screen.getByRole('button', {  name: /decrement/i});
    expect(decreaseButton).toBeInTheDocument();

    const toggleButton = screen.getByRole('button', {  name: /toggle counter/i});
    expect(toggleButton).toBeInTheDocument();
  });
});
