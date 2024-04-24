import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

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
})
