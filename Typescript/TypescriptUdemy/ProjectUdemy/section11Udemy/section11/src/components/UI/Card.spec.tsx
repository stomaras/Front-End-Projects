import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import Modal from './Modal';

let buttons;
let headerButton: Element;

beforeEach(() => {
    
    render(<Modal />);
    buttons = document.querySelectorAll('button');
    headerButton = buttons[0];
}, 5000);



describe("Section 11 Building a Food Order App Testing", () => {
  it("Click Header Button - expect modal - click close button", async() => {

      

      
      await act(async () => {
          await userEvent.click(headerButton);
      });
    
  }, 5000);
});