import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Input from './Input';
import { Stack } from '../../../index';

export default {
    title: 'Atoms/Input',
    component: Input
} as Meta;

/**
 * Default input field
 */
export const Default = () => {
    return (
        <Stack>
            <Input placeholder="Sample Input" />
        </Stack>
    );
};

/**
 * Inputs with different variants
 */
export const Variants = () => {
    return (
        <Stack direction="vertical">
            <Input placeholder="Normal Input" />
            <Input placeholder="Disabled Input" disabled />
            <Input placeholder="Invalid Input" invalid />
        </Stack>
    );
};
