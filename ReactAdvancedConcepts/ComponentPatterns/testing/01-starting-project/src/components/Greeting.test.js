import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Greeting Tests Component', () => {
    test('renders hello world as a text', () => {
        // Arrange
        render(<Greeting/>);

        // Act
        // ... nothing

        // Assert
        // with exact casing matters
        const helloWorldElement = screen.getByText('Hello World', {exact:false});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to see you if the button is not clicked', () => {
        render(<Greeting/>);

        const outputElement = screen.getByText('Good to see you', {exact:false});
        expect(outputElement).toBeInTheDocument();
    });

    test('renders Changed if the button was clicked',() => {
        // Arrange
        render(<Greeting/>);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.getByText('Changed', {exact:false});
        expect(outputElement).toBeInTheDocument();
    });

    test('does not render good to see you if the button was clicked', () => {
        render(<Greeting/>);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const outputElement = screen.queryByText('good to see you', {exact:false});
        expect(outputElement).toBeNull();
    });

})
