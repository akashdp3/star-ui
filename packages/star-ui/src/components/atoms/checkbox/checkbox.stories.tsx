import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import CheckBox from './Checkbox';
import { Stack } from '../../../index';

export default {
    title: 'Atoms/CheckBox',
    component: CheckBox
} as Meta;

/**
 * Stories:
 * [ ] Sample checkbox
 * [ ] Checkbox with all states: default, selected, disabled
 * [ ] Checkbox Group
 */

/**
 * Sample checkbox
 */
export const Sample = () => <CheckBox label="Sample" />;

/**
 * Checkbox with following states:
 * 1. Default
 * 2. Selected
 * 3. Disabled
 */
export const AllStates = () => (
    <Stack direction="vertical">
        <CheckBox label="Default" />
        <CheckBox label="Selected" checked />
        <CheckBox label="Disabled" disabled />
    </Stack>
);
