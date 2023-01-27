import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


let header: HTMLElement;
let cardButton: HTMLElement;
let mealsSummaryHeader: HTMLElement;
let mealsSummaryP1: HTMLElement;
let mealsSummaryP2: HTMLElement;
let mealsUl: Element | HTMLDocument | (Element | HTMLDocument)[] | undefined;
let mealsList: string | any[] | NodeListOf<HTMLLIElement>;


beforeAll(() => {

});

beforeEach(() => {

  render(<App />);
  screen.debug(undefined, 100000);
  cardButton = screen.getByRole('button');
  mealsSummaryHeader = screen.getByRole('heading', { name: /delicious food, delivered to you/i });
  mealsSummaryP1 = screen.getByText(/choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home\./i);
  mealsSummaryP2 = screen.getByText(/all our meals are cooked with high\-quality ingredients, just\-in\-time and of course by experienced chefs!/i);
  mealsList = document.querySelectorAll('li');
  mealsUl = document.querySelectorAll('ul')[0];
  screen.debug(mealsUl);
  screen.debug(undefined, 100000);

}, 5000);

describe("Section 11 Building a Food Order App Testing", () => {
  it("App to be in the document", () => {
    const headingMeal = screen.getByRole('heading', { name: /react meals/i });
    expect(headingMeal).toBeInTheDocument();
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(cardButton).toBeInTheDocument();
    expect(mealsSummaryHeader).toBeInTheDocument();
    expect(mealsSummaryP1).toBeInTheDocument();
    expect(mealsSummaryP2).toBeInTheDocument();

    expect(mealsUl).toBeInTheDocument();

    for (let i = 0; i < mealsList.length; i++) {
      const li = mealsList[i];
      expect(li).toBeInTheDocument();
      const liText = screen.getByText(li.textContent)
      expect(liText).toBeInTheDocument();
    }
  }, 5000);
});
