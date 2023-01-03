import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import App from './App';

let appWrapper: HTMLElement;

beforeEach(() => {
    const wrapper = render(<App/>);
    appWrapper = wrapper.getByTestId('app-id');
})

describe("Testing Infrastructure of Section 16", () => { 
    it('renders Simple Input Correctly', () => {
        expect(appWrapper).toBeInTheDocument();
    });
});