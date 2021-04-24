import React, { createContext } from "react";
import * as PropTypes from "prop-types";

import { homeReducer } from "./home.reducer";
import { AppContext } from "../../../app/context/app.context";

/*
  We are using createContext() to initialize Context
  and assign it to 'homeContext' object containing 'Provider' and 'Consumer'
*/
const homeContext = createContext();

/*
  We are creating new React component called 'homeProvider'.
  This component wraps it’s children components with 'Provider' that accepts 'value' prop.
*/

class homeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dispatchhomeAction: action => {
                this.setState(prevState => props.reducer(prevState, action));
            }
        };
    }

    render() {
        const {
            props: { children }
        } = this;
        const { dispatchhomeAction, ...state } = this.state;
        return (
            <homeContext.Provider
                value={{ dispatchhomeAction, state }}
            >
                {children}
            </homeContext.Provider>
        );
    }
}

homeProvider.propTypes = {
    reducer: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

const withhomeProvider = WrappedComponent => {
    return props => {
        return (
            <homeProvider reducer={homeReducer}>
                <WrappedComponent props={props} />
            </homeProvider>
        );
    };
};

const withhomeConsumer = WrappedComponent => {
    return props => {
        return (
            <homeContext.Consumer>
                {state => (
                    <WrappedComponent {...props} homeContext={state} />
                )}
            </homeContext.Consumer>
        );
    };
};

const AppAndhomeConsumer = ({ children }) => (
    <AppContext.Consumer>
        {appContext => (
            <homeContext.Consumer>
                {homeContext =>
                    children({ appContext, homeContext })
                }
            </homeContext.Consumer>
        )}
    </AppContext.Consumer>
);

AppAndhomeConsumer.propTypes = {
    children: PropTypes.func.isRequired
};

const withAppAndhomeConsumer = WrappedComponent => {
    return props => {
        return (
            <AppAndhomeConsumer>
                {({ appContext, homeContext }) => {
                    return (
                        <WrappedComponent
                            {...props}
                            appContext={appContext}
                            homeContext={homeContext}
                        />
                    );
                }}
            </AppAndhomeConsumer>
        );
    };
};

export {
    withhomeProvider,
    homeContext,
    withhomeConsumer,
    withAppAndhomeConsumer
};
