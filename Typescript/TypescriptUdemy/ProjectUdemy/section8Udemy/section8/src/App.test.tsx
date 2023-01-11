import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import App from './App';


let wrapperApp: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
let textBoxes: HTMLElement[];
let button:HTMLElement

describe("Section 8 Testing", () => {
  
  beforeEach(() => {
    render(<App />);
    textBoxes = screen.getAllByRole('textbox');
    button = screen.getByRole('button', { name: /add user/i });
  }, 5000);

  test('Expect App Component to be in the document', () => {

    for (let index = 0; index < textBoxes.length; index++) {
      const textBox = textBoxes[index];
      expect(textBox).toBeInTheDocument();
    }
    expect(button).toBeInTheDocument();
  });
});
