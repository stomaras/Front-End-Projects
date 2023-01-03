import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import App from './App';

describe("Testing For App Component", () => {
    it("Render App Correctly", () => {
        const wrapper = render(<App/>);
    })
})