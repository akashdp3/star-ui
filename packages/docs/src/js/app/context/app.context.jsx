import React, { createContext } from 'react';
import * as PropTypes from 'prop-types';

import { appReducer } from './app.reducer';

/*
  We are using createContext() to initialize Context
  and assign it to 'AppContext' object containing 'Provider' and 'Consumer'
*/
const AppContext = createContext();

/*
  We are creating new React component called 'AppProvider'.
  This component wraps it’s children components with 'Provider' that accepts 'value' prop.
*/

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dispatchAppAction: (action) => {
                this.setState((prevState) => props.reducer(prevState, action));
            }
        };
    }

    render() {
        const {
            props: { children }
        } = this;
        const { dispatchAppAction, ...state } = this.state;
        return (
            <AppContext.Provider value={{ dispatchAppAction, state }}>
                {children}
            </AppContext.Provider>
        );
    }
}

AppProvider.propTypes = {
    reducer: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

const withAppProvider = (WrappedComponent) => {
    return (props) => {
        return (
            <AppProvider reducer={appReducer}>
                <WrappedComponent props={props} />
            </AppProvider>
        );
    };
};

const withAppConsumer = (WrappedComponent) => {
    return (props) => {
        return (
            <AppContext.Consumer>
                {(state) => <WrappedComponent {...props} appContext={state} />}
            </AppContext.Consumer>
        );
    };
};

export { withAppProvider, AppContext, withAppConsumer };
