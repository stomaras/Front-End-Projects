import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {storeState} from "./app-util/initialStoreState";
import {renderWithProvider, renderWithProvidersSlices} from "./app-util/renderWithProvider";
import { store } from './state/store';
import userEvent from '@testing-library/user-event';
import {counterActions} from "../src/state/actions/index";
import { stat } from 'fs';
import { decrementCounter } from './state/action-creators';

let count:number;
let isAuth:boolean;
let increaseButton: HTMLElement;
let decreaseButton: HTMLElement;
let increaseByFive: HTMLElement;
let toggleButton: HTMLElement;
let loginButton: HTMLElement;
let logoutButton: HTMLElement;

beforeEach(async () => {
  const preloadedState = storeState;
  renderWithProvidersSlices(<App />, {preloadedState});
  count = storeState.counter.counter;
  isAuth = storeState.auth.isAuth;
});


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

    const divCount = screen.getByTestId('countValue');
    expect(divCount).toBeInTheDocument();

    expect(screen.getByText(count)).toBeInTheDocument();
    expect(isAuth).toBe(false);
    
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

describe("App User Interactions Testing", () => {
  it("Decrement button click and decrease by 1 counter value each time button clicked", async () => {
    expect(screen.getByText(/0/i)).toBeInTheDocument();
    decreaseButton = screen.getByRole('button', {  name: /decrement/i});
    await userEvent.click(decreaseButton);
    expect(screen.getByText(/-1/i)).toBeInTheDocument();
    await userEvent.click(decreaseButton);
    expect(screen.getByText(/-2/i)).toBeInTheDocument();
  });
  it("Increment button clicked and increase by 1 counter value each time button clicked", async () => {
    expect(screen.getByText(/0/i)).toBeInTheDocument();
    increaseButton = screen.getByRole('button', {name:/increment/i});
    await userEvent.click(increaseButton);
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    await userEvent.click(increaseButton);
    expect(screen.getByText(/2/i)).toBeInTheDocument();
  });
  it("Increase button clicked and increase by 5 counter value each time button clicked", async () => {
    expect(screen.getByText(/0/i)).toBeInTheDocument();
    increaseByFive = screen.getByRole('button', {name:/increase by/i});
    await userEvent.dblClick(increaseByFive);
    expect(screen.getByText(/10/i)).toBeInTheDocument();
  });
  it("Toggle Button clicked and hide counter value", async () => {
    expect(screen.getByText(/0/i)).toBeInTheDocument();
    toggleButton = screen.getByRole('button', {name:/toggle counter/i});
    await userEvent.click(toggleButton);
  })
  it("Login Button clicked and show user profile heading after clicked log out button and show main page", async () => {
    const loginButton = screen.getByRole('button', {  name: /login/i});
    await userEvent.click(loginButton);
    const userHeader = screen.getByRole('heading', {  name: /my user profile/i});
    const myProductsLink = screen.getByRole('link', {  name: /my products/i});
    const mySales = screen.getByRole('link', {  name: /my sales/i});
    expect(myProductsLink).toBeInTheDocument();
    expect(mySales).toBeInTheDocument();
    expect(userHeader).toBeInTheDocument();
    const logoutButton = screen.getByRole('button', { name: /logout/i});
    await userEvent.click(logoutButton);
    expect(screen.getByText(/email/i)).toBeInTheDocument();
  });
});


