import React from 'react';
import user from "@testing-library/user-event";
import { fireEvent, render, RenderResult, screen, within } from '@testing-library/react';
import App from './App';


let wrapperApp: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
let button: HTMLElement
let usersList: HTMLElement;

let ageField: HTMLElement;
let nameField: HTMLElement;

describe("Section 8 Testing", () => {
  
  beforeEach(() => {
    render(<App />);
    button = screen.getByRole('button', { name: /add user/i , hidden:true});
    usersList = screen.getByRole('list');
    ageField = screen.getByRole('spinbutton', { name: /age \(years\)/i });
    nameField = screen.getByRole('textbox', { name: /username/i });
  }, 5000);

  it('Expect App Component to be in the document', () => {
    expect(nameField).toBeInTheDocument();
    expect(ageField).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(usersList).toBeInTheDocument();
  },5000);

  it("Type name inside text box and age click button expect user to be in the document", async () => {
    await user.type(nameField, "Tom");
    expect(nameField).toHaveValue("Tom");
    await user.type(ageField, "25");
    await user.click(button);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByText(/tom/i)).toBeInTheDocument();
    expect(screen.getByText(/25/i)).toBeInTheDocument();
  }, 5000);
  
  it("Expect error modal to be in the document after type wrong credentials - click okay button - disappear error modal", async () => {
    await user.type(ageField, "-1");
    await user.click(button);
    const headingError = screen.getByRole('heading', { name: /invalid input/i });
    expect(headingError).toBeInTheDocument();
    const okayButton = screen.getByRole('button', { name: /okay/i });
    expect(okayButton).toBeInTheDocument();
    await user.click(okayButton);
    expect(headingError).not.toBeInTheDocument();
  },5000);
  
});
