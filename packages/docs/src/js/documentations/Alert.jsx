import React from 'react';
import { Alert } from 'react-star-ui';

import Example from '../components/Example';

const AlertDocs = () => {
    return (
        <Example title="Alert" description="Alerts are used to notify user.">
            <Example.Preview>
                <Alert>Sample Alert</Alert>
            </Example.Preview>
            <Example.Code>{`<Alert>Sample Alert</Alert>`}</Example.Code>
        </Example>
    );
};

export default AlertDocs;
