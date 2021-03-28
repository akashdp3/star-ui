import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Stack from '../../structures/stack/Stack';
import Alert from './Alert';

export default {
    title: 'Alert',
    component: Alert
} as Meta;

/**
 * Stories:
 * [x] Default Alert
 * [x] All states - Error, Success, Warning, Info
 */

/**
 * Default Alert
 */
export const Default = () => {
    return <Alert>Default Alert</Alert>;
};

export const AllStates = () => {
    return (
        <Stack direction="vertical">
            <Alert variant="error">Error Alert</Alert>
            <Alert variant="success">Success Alert</Alert>
            <Alert variant="warning">Warning Alert</Alert>
            <Alert variant="info">Info Alert</Alert>
        </Stack>
    );
};
