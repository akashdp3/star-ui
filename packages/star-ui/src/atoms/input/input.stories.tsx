import React from 'react';

import Input from './Input';
import { Stack } from '../..';

export default {
    title: 'Input',
    component: Input
};

/**
 * Default input field
 */
export const Default = () => {
    return (
        <Stack style={{ width: '98%' }}>
            <Input placeholder="Sample Input" />
        </Stack>
    );
};

/**
 * Inputs with different variants
 */
export const Variants = () => {
    return (
        <Stack direction="vertical" style={{ width: '98%' }}>
            <Input placeholder="Normal Input" />
            <Input placeholder="Disabled Input" disabled />
            <Input placeholder="Invalid Input" invalid />
        </Stack>
    );
};
