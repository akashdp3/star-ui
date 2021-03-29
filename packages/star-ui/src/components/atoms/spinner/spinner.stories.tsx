import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Spinner from './Spinner';
import { Stack } from '../../structures/stack';

export default {
    title: 'Spinner',
    component: Spinner
} as Meta;

/**
 * Stories:
 * [x] Default spinner
 * [x] Spinner with different sizes
 * [x] Spinner with custom colour
 */

export const Default = () => {
    return <Spinner />;
};

export const Sizes = () => {
    return (
        <Stack>
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
        </Stack>
    );
};

export const Custom = () => {
    return <Spinner borderColor="lightgreen" borderLeftColor="darkgreen" />;
};
