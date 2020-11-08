import React from 'react';

import Badge from './Badge';
import Stack from '../../structures/stack/Stack';

export default {
    title: 'Badge',
    component: Badge
};

export const Default = () => {
    return <Badge>Default</Badge>;
};

export const Variants = () => (
    <Stack>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
    </Stack>
);

export const Custom = () => {
    return (
        <Badge backgroundColor="lightGreen" color="green">
            Custom Badge
        </Badge>
    );
};
