import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Stack from './Stack';

export default {
    title: 'Stack',
    component: Stack
} as Meta;

/**
 * Default stack
 */
export const Default = () => {
    return (
        <Stack>
            <p>Element A</p>
            <p>Element B</p>
            <p>Element C</p>
        </Stack>
    );
};

/**
 * Stack with horizontal direction
 */
export const Horizontal = () => {
    return (
        <Stack>
            <p>Element A</p>
            <p>Element B</p>
            <p>Element C</p>
        </Stack>
    );
};

/**
 * Stack with vertical direction
 */
export const Vertical = () => {
    return (
        <Stack direction="vertical">
            <p>Element A</p>
            <p>Element B</p>
            <p>Element C</p>
        </Stack>
    );
};
