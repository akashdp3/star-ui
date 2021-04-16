import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Badge from './Badge';
import Stack from '../../structures/stack/Stack';

export default {
    title: 'Atoms/Badge',
    component: Badge
} as Meta;

/**
 * Default badge
 */
export const Default = () => {
    return <Badge>Default</Badge>;
};

/**
 * Badge with different variants
 */
export const Variants = () => (
    <Stack>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
    </Stack>
);

/**
 * Custom badge with backgroundColor and color passed specifically
 */
export const Custom = () => {
    return (
        <Badge backgroundColor="lightGreen" color="green">
            Custom Badge
        </Badge>
    );
};
