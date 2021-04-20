import React from 'react';
import {ErrorComponent} from "./ErrorComponent";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, message: '', helpMessage: ''};
    }
    
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({
            hasError: true,
            displayMessage: error.displayMessage ?? 'An unexpected error has occurred',
            helpMessage: error.helpMessage
        });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <>
                <ErrorComponent displayMessage={this.state.displayMessage} helpMessage={this.state.helpMessage} />
                <button className={'btn btn-info btn-lg'} onClick={() => this.setState({hasError: false})} >Refresh</button>
            </>
        }

        return this.props.children;
    }
}