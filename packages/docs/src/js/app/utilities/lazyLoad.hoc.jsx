import React, { Suspense } from 'react';

import ErrorBoundary from './errorBoundary.hoc';
import PageLoader from '../components/PageLoader';

const lazyLoad = (WrappedComponent) => {
    return class extends React.PureComponent {
        render() {
            const self = this;
            return (
                <ErrorBoundary>
                    <Suspense fallback={<PageLoader isLoading />}>
                        <WrappedComponent {...self.props} />
                    </Suspense>
                </ErrorBoundary>
            );
        }
    };
};

export default lazyLoad;
