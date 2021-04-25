import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppContainer from '../components/AppContainer';
import lazyLoad from '../utilities/lazyLoad.hoc';
import { documentations } from '../constants/documentation.constant';

const HomeComponent = React.lazy(() =>
    import(
        /* webpackChunkName: "home-page" */ '../../modules/home/components/Home'
    )
);

const HomeLazyComponent = lazyLoad(HomeComponent);

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeLazyComponent} />
            <AppContainer>
                {documentations.map((documentation) => (
                    <Route
                        exact
                        path={`/components${documentation.route}`}
                        component={documentation.component}
                    />
                ))}
            </AppContainer>
        </Switch>
    );
};

export default Routes;
