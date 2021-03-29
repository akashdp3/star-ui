import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Radio from './Radio';
import { Stack } from '../../../index';

export default {
    title: 'Radio',
    component: Radio
} as Meta;

/**
 * Stories:
 * [x] Sample radio button
 * [x] Radio button with all states: default, selected, disabled
 * [ ] Radio Group
 */

/**
 * Sample radio button
 */
export const Sample = () => <Radio label="Sample Radio Button" />;

/**
 * Radio button with following states:
 * 1. Default
 * 2. Selected
 * 3. Disabled
 */
export const AllStates = () => (
    <Stack direction="vertical">
        <Radio label="Default State" />
        <Radio label="Selected State" checked />
        <Radio label="Disabled State" disabled />
    </Stack>
);
