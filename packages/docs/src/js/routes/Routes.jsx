import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppContainer from '../components/AppContainer';
import lazyLoad from '../utilities/lazyLoad.hoc';
import { documentations } from '../constants/documentation.constant';

const HomeComponent = React.lazy(() =>
    import(
        /* webpackChunkName: "home-page" */ '../modules/home/components/Home'
    )
);

const HomeLazyComponent = lazyLoad(HomeComponent);

const Routes = () => {
    const components = [];
    documentations.forEach((document) => {
        document.components.forEach((component) => {
            components.push(component);
        });
    });

    return (
        <Switch>
            <Route exact path="/" component={HomeLazyComponent} />
            <AppContainer>
                {components.map((component) => (
                    <Route
                        key={component.route}
                        path={`/components${component.route}`}
                        component={component.content}
                    />
                ))}
            </AppContainer>
        </Switch>
    );
};

export default Routes;
