import React from 'react';
import user from "@testing-library/user-event";
import { fireEvent, render, RenderResult, screen, within } from '@testing-library/react';
import App from './App';


let wrapperApp: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
let textBoxes: HTMLElement[];
let button: HTMLElement
let usersList: HTMLElement;

describe("Section 8 Testing", () => {
  
  beforeEach(() => {
    render(<App />);
    textBoxes = screen.getAllByRole('textbox');
    button = screen.getByRole('button', { name: /add user/i , hidden:true});
    usersList = screen.getByRole('list');
  }, 5000);

  test('Expect App Component to be in the document', () => {

    for (let index = 0; index < textBoxes.length; index++) {
      const textBox = textBoxes[index];
      expect(textBox).toBeInTheDocument();
    }
    expect(button).toBeInTheDocument();
    expect(usersList).toBeInTheDocument();
  });

  it("Type users - click submit - check list", async () => {
    screen.debug(undefined, 10000);
    await user.type(textBoxes[0], "Tom");
    expect(textBoxes[0]).toHaveValue("Tom");

    button.hidden = false;
    await user.click(button);
    screen.debug(undefined, 100000)
  })
});
