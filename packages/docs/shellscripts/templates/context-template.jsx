import React, { createContext } from "react";
import * as PropTypes from "prop-types";

import { REDUCER_NAMEReducer } from "./REDUCER_NAME.reducer";
import { AppContext } from "../../../app/context/app.context";

/*
  We are using createContext() to initialize Context
  and assign it to 'CONTEXT_NAMEContext' object containing 'Provider' and 'Consumer'
*/
const CONTEXT_NAMEContext = createContext();

/*
  We are creating new React component called 'CONTEXT_NAMEProvider'.
  This component wraps it’s children components with 'Provider' that accepts 'value' prop.
*/

class CONTEXT_NAMEProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dispatchCONTEXT_NAMEAction: action => {
                this.setState(prevState => props.reducer(prevState, action));
            }
        };
    }

    render() {
        const {
            props: { children }
        } = this;
        const { dispatchCONTEXT_NAMEAction, ...state } = this.state;
        return (
            <CONTEXT_NAMEContext.Provider
                value={{ dispatchCONTEXT_NAMEAction, state }}
            >
                {children}
            </CONTEXT_NAMEContext.Provider>
        );
    }
}

CONTEXT_NAMEProvider.propTypes = {
    reducer: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

const withCONTEXT_NAMEProvider = WrappedComponent => {
    return props => {
        return (
            <CONTEXT_NAMEProvider reducer={REDUCER_NAMEReducer}>
                <WrappedComponent props={props} />
            </CONTEXT_NAMEProvider>
        );
    };
};

const withCONTEXT_NAMEConsumer = WrappedComponent => {
    return props => {
        return (
            <CONTEXT_NAMEContext.Consumer>
                {state => (
                    <WrappedComponent {...props} REDUCER_NAMEContext={state} />
                )}
            </CONTEXT_NAMEContext.Consumer>
        );
    };
};

const AppAndCONTEXT_NAMEConsumer = ({ children }) => (
    <AppContext.Consumer>
        {appContext => (
            <CONTEXT_NAMEContext.Consumer>
                {REDUCER_NAMEContext =>
                    children({ appContext, REDUCER_NAMEContext })
                }
            </CONTEXT_NAMEContext.Consumer>
        )}
    </AppContext.Consumer>
);

AppAndCONTEXT_NAMEConsumer.propTypes = {
    children: PropTypes.func.isRequired
};

const withAppAndCONTEXT_NAMEConsumer = WrappedComponent => {
    return props => {
        return (
            <AppAndCONTEXT_NAMEConsumer>
                {({ appContext, REDUCER_NAMEContext }) => {
                    return (
                        <WrappedComponent
                            {...props}
                            appContext={appContext}
                            REDUCER_NAMEContext={REDUCER_NAMEContext}
                        />
                    );
                }}
            </AppAndCONTEXT_NAMEConsumer>
        );
    };
};

export {
    withCONTEXT_NAMEProvider,
    CONTEXT_NAMEContext,
    withCONTEXT_NAMEConsumer,
    withAppAndCONTEXT_NAMEConsumer
};
