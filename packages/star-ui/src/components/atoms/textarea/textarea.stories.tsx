import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import TextArea from './TextArea';
import { Stack } from '../../../index';

export default {
    title: 'Atoms/TextArea',
    component: TextArea
} as Meta;

/**
 * Default textarea
 */
export const Default = () => {
    return (
        <Stack>
            <TextArea placeholder="Sample TextArea" />
        </Stack>
    );
};

/**
 * Textarea with different variants('normal', 'disabled', 'invalid')
 */
export const Variants = () => {
    return (
        <Stack direction="vertical">
            <TextArea placeholder="Normal TextArea" />
            <TextArea placeholder="Disabled TextArea" disabled />
            <TextArea placeholder="Invalid TextArea" invalid />
        </Stack>
    );
};
