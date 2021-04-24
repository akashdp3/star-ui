import React, { createContext } from "react";
import * as PropTypes from "prop-types";

import { documentationReducer } from "./documentation.reducer";
import { AppContext } from "../../../app/context/app.context";

/*
  We are using createContext() to initialize Context
  and assign it to 'documentationContext' object containing 'Provider' and 'Consumer'
*/
const documentationContext = createContext();

/*
  We are creating new React component called 'documentationProvider'.
  This component wraps it’s children components with 'Provider' that accepts 'value' prop.
*/

class documentationProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dispatchdocumentationAction: action => {
                this.setState(prevState => props.reducer(prevState, action));
            }
        };
    }

    render() {
        const {
            props: { children }
        } = this;
        const { dispatchdocumentationAction, ...state } = this.state;
        return (
            <documentationContext.Provider
                value={{ dispatchdocumentationAction, state }}
            >
                {children}
            </documentationContext.Provider>
        );
    }
}

documentationProvider.propTypes = {
    reducer: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

const withdocumentationProvider = WrappedComponent => {
    return props => {
        return (
            <documentationProvider reducer={documentationReducer}>
                <WrappedComponent props={props} />
            </documentationProvider>
        );
    };
};

const withdocumentationConsumer = WrappedComponent => {
    return props => {
        return (
            <documentationContext.Consumer>
                {state => (
                    <WrappedComponent {...props} documentationContext={state} />
                )}
            </documentationContext.Consumer>
        );
    };
};

const AppAnddocumentationConsumer = ({ children }) => (
    <AppContext.Consumer>
        {appContext => (
            <documentationContext.Consumer>
                {documentationContext =>
                    children({ appContext, documentationContext })
                }
            </documentationContext.Consumer>
        )}
    </AppContext.Consumer>
);

AppAnddocumentationConsumer.propTypes = {
    children: PropTypes.func.isRequired
};

const withAppAnddocumentationConsumer = WrappedComponent => {
    return props => {
        return (
            <AppAnddocumentationConsumer>
                {({ appContext, documentationContext }) => {
                    return (
                        <WrappedComponent
                            {...props}
                            appContext={appContext}
                            documentationContext={documentationContext}
                        />
                    );
                }}
            </AppAnddocumentationConsumer>
        );
    };
};

export {
    withdocumentationProvider,
    documentationContext,
    withdocumentationConsumer,
    withAppAnddocumentationConsumer
};
