import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

let appWrapper: HTMLElement;
let textBoxes: HTMLElement[];
let textBoxName: HTMLElement;
let textBoxEmail: HTMLElement;
let submitButton: HTMLElement;

beforeEach(() => {
    const wrapper = render(<App/>);
    appWrapper = wrapper.getByTestId('app-id');
    submitButton = screen.getByRole('button');
    textBoxes = screen.getAllByRole('textbox');
    textBoxName = textBoxes[0];
    textBoxEmail = textBoxes[1];
},5000)

describe("Testing Infrastructure of Section 16", () => { 
    it('renders Simple Input Correctly', () => {
        expect(appWrapper).toBeInTheDocument();

        const name = screen.getByText(/your name/i);
        expect(name).toBeInTheDocument();

        const email = screen.getByText(/your e-mail/i);
        expect(email).toBeInTheDocument();

        for (let index = 0; index < textBoxes.length; index++) {
            const textBox = textBoxes[index];
            expect(textBox).toBeInTheDocument();
        }
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toBeDisabled();

    },5000);
});

describe("Testing Infrastructure of Section 16 Interactions", () => {
    it("Name TextBox Type Correctly", async () => {
        await userEvent.type(textBoxName, "tom");
        await userEvent.type(textBoxEmail, "tom@gmail.com");
        expect(submitButton).toBeEnabled();
    },5000);
});