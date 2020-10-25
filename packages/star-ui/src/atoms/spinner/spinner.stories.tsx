import React from 'react';

import Spinner from './Spinner';
import { Stack } from '../../structures/stack';

export default {
    title: 'Spinner',
    component: Spinner
};

/**
 * TODO:
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
            <Spinner size="bg" />
        </Stack>
    );
};

export const Custom = () => {
    return <Spinner borderColor="lightgreen" borderLeftColor="darkgreen" />;
};
