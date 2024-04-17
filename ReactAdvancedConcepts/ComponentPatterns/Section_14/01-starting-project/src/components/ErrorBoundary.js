import { Component } from "react";

class ErrorBoundary extends Component{

    constructor() {
        super();
        this.state = { hasError: false };
    }

    // makes class based component error boundary
    componentDidCatch(error) {
        console.log(error);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong!</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;