import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Button from './Button';
import Stack from '../../structures/stack/Stack';

export default {
    title: 'Button',
    component: Button
} as Meta;

/**
 * Stories:
 * [x] Button variants
 * [x] Button in disabled state
 * [x] Button in loading state
 */

/**
 * Buttons with different variants
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

/**
 * Buttons with different variants in disabled state
 */
export const Disabled = () => (
    <Stack>
        <Button variant="primary" disabled>
            Primary
        </Button>
        <Button variant="secondary" disabled>
            Secondary
        </Button>
        <Button variant="success" disabled>
            Success
        </Button>
        <Button variant="danger" disabled>
            Danger
        </Button>
        <Button variant="warning" disabled>
            Warning
        </Button>
        <Button variant="ghost" disabled>
            Ghost
        </Button>
    </Stack>
);

/**
 * Buttons with different variant in loading and disabled state
 */
export const Loading = () => (
    <Stack>
        <Button variant="primary" loading disabled>
            Primary
        </Button>
        <Button variant="secondary" loading disabled>
            Secondary
        </Button>
        <Button variant="success" loading disabled>
            Success
        </Button>
        <Button variant="danger" loading disabled>
            Danger
        </Button>
        <Button variant="warning" loading disabled>
            Warning
        </Button>
        <Button variant="ghost" loading disabled>
            Ghost
        </Button>
    </Stack>
);

export const Sizes = () => (
    <Stack style={{ alignItems: "center" }}>
        <Button variant="primary" size="small">Primary</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="primary" size="large">Primary</Button>
    </Stack>
)
