import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({ error, errorInfo });
        // You can also log error messages to an error reporting service here
    }

    render() {
        const { children } = this.props;
        const { error, errorInfo } = this.state;
        if (errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {error && error.toString()}
                        <br />
                        {errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element.isRequired
};

export default ErrorBoundary;
