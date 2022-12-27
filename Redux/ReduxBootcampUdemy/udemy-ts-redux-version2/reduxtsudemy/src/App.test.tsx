import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {storeState} from "./app-util/initialStoreState";
import {renderWithProvider} from "./app-util/renderWithProvider";
import { store } from './state/store';

let initialCount:number;

beforeEach(() => {
  renderWithProvider(<App />, store);
  initialCount = store.getState().counter.counter;
})
describe("Renders App  Correctly UI Testing", () => {
  it("Expect header heading to be in the document", () => {
    const headerRedux = screen.getByText(/redux auth/i);
    expect(headerRedux).toBeInTheDocument();
    screen.debug(undefined,100000);
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

    const divCount = screen.getByTestId('countValue');
    expect(divCount).toBeInTheDocument();

    expect(screen.getByText(initialCount)).toBeInTheDocument();
    
  });
  it("Expect form to renders correctly", () => {
    const emailText = screen.getByText(/email/i);
    expect(emailText).toBeInTheDocument();

    const emailInput = screen.getByRole('textbox', {  name: /email/i});
    expect(emailInput).toBeInTheDocument();

    const passwordText = screen.getByText(/password/i);
    expect(passwordText).toBeInTheDocument();

    const passwordTextField = screen.getByLabelText(/password/i);
    expect(passwordTextField).toBeInTheDocument();

    const loginButton = screen.getByRole('button', {  name: /login/i});
    expect(loginButton).toBeInTheDocument();
  });
});
