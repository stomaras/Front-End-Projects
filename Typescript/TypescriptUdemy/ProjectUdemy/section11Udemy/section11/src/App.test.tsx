import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


let header: HTMLElement;
let cardButton: HTMLElement
beforeAll(() => {

});

beforeEach(() => {
  render(<App />);
  screen.debug(undefined, 100000);
  cardButton = screen.getByRole('button');
},5000);

describe("Section 11 Building a Food Order App Testing", () => {
  it("App to be in the document", () => {
    const headingMeal = screen.getByRole('heading', { name: /react meals/i });
    expect(headingMeal).toBeInTheDocument();
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(cardButton).toBeInTheDocument();
  }, 5000);
});
