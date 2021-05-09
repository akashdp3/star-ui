import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppContainer from '../components/AppContainer';
import { documentations } from '../constants/documentation.constant';

const Routes = () => {
    const components = [];
    documentations.forEach((document) => {
        document.components.forEach((component) => {
            components.push(component);
        });
    });

    return (
        <Switch>
            <Route
                exact
                path="/"
                render={() => <Redirect to="/components/alert" />}
            />
            <AppContainer>
                {components.map((component) => (
                    <Route
                        key={component.route}
                        path={`/components${component.route}`}
                        component={component.page}
                    />
                ))}
            </AppContainer>
        </Switch>
    );
};

export default Routes;
