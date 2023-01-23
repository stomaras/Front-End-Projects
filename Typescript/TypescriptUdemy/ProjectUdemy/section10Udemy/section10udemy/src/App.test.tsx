import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';



describe(" Section 10 Testing", () => {
  let loginButton: HTMLElement;
  let textFields: HTMLElement[];
  let textFieldEmail: HTMLElement;
  let textFieldPassword: HTMLElement;

  beforeEach(() => {
    render(<App />);
    loginButton = screen.getByRole('button', { name: /login/i , hidden: true});
    textFields = screen.getAllByRole("textbox");
    textFieldEmail = screen.getByRole('textbox', { name: /e\-mail/i });
    textFieldPassword = screen.getByLabelText(/password/i);
    screen.debug(undefined, 100000);
  }, 5000);
  
  it("Expect button and textFields to be in the document", () => {
    expect(loginButton).toBeInTheDocument();
    expect(textFieldEmail).toBeInTheDocument();
    expect(textFieldPassword).toBeInTheDocument();
  });
});
























