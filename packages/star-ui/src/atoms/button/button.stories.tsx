import React from 'react';

import Button from './Button';
import Stack from '../../structures/stack/Stack';

export default {
    title: 'Button',
    component: Button
};

/**
 * Stories:
 * [x] Button variants
 * [x] Button in disabled state
 * [x] Button in loading state
 */

export const Variants = () => {
    return (
        <Stack>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="ghost">Ghost</Button>
        </Stack>
    );
};

export const Disabled = () => (
    <Stack>
        <Button variant="primary" isDisabled>
            Primary
        </Button>
        <Button variant="secondary" isDisabled>
            Secondary
        </Button>
        <Button variant="success" isDisabled>
            Success
        </Button>
        <Button variant="danger" isDisabled>
            Danger
        </Button>
        <Button variant="warning" isDisabled>
            Warning
        </Button>
        <Button variant="ghost" isDisabled>
            Ghost
        </Button>
    </Stack>
);

export const Loading = () => (
    <Stack>
        <Button variant="primary" isLoading isDisabled>
            Primary
        </Button>
        <Button variant="secondary" isLoading isDisabled>
            Secondary
        </Button>
        <Button variant="success" isLoading isDisabled>
            Success
        </Button>
        <Button variant="danger" isLoading isDisabled>
            Danger
        </Button>
        <Button variant="warning" isLoading isDisabled>
            Warning
        </Button>
        <Button variant="ghost" isLoading isDisabled>
            Ghost
        </Button>
    </Stack>
);
