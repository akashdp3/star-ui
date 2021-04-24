import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppContainer from '../components/AppContainer';
import lazyLoad from '../utilities/lazyLoad.hoc';

const HomeComponent = React.lazy(() =>
    import(
        /* webpackChunkName: "home-page" */ '../../modules/home/components/Home'
    )
);
const DocumentationComponent = React.lazy(() =>
    import(
        /* webpackChunkName: "documentation-page" */ '../../modules/documentation/components/Documentation'
    )
);

const HomeLazyComponent = lazyLoad(HomeComponent);
const DocumentationLazyCompoent = lazyLoad(DocumentationComponent);

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeLazyComponent} />
            <AppContainer>
                <Route
                    exact
                    path="/components/"
                    component={DocumentationLazyCompoent}
                />
            </AppContainer>
        </Switch>
    );
};

export default Routes;
