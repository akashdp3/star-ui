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
// export const Loading = () => (
//     <Stack>
//         <Button variant="primary" loading disabled>
//             Primary
//         </Button>
//         <Button variant="secondary" loading disabled>
//             Secondary
//         </Button>
//         <Button variant="success" loading disabled>
//             Success
//         </Button>
//         <Button variant="danger" loading disabled>
//             Danger
//         </Button>
//         <Button variant="warning" loading disabled>
//             Warning
//         </Button>
//         <Button variant="ghost" loading disabled>
//             Ghost
//         </Button>
//     </Stack>
// );

export const Sizes = () => (
    <Stack direction="vertical">
        <Stack align="center">
            <Button variant="primary" size="small">
                Button
            </Button>
            <Button variant="primary">Button</Button>
            <Button variant="primary" size="large">
                Button
            </Button>
        </Stack>
        <Stack align="center">
            <Button variant="secondary" size="small">
                Button
            </Button>
            <Button variant="secondary">Button</Button>
            <Button variant="secondary" size="large">
                Button
            </Button>
        </Stack>
        <Stack align="center">
            <Button variant="success" size="small">
                Button
            </Button>
            <Button variant="success">Button</Button>
            <Button variant="success" size="large">
                Button
            </Button>
        </Stack>
        <Stack align="center">
            <Button variant="danger" size="small">
                Button
            </Button>
            <Button variant="danger">Button</Button>
            <Button variant="danger" size="large">
                Button
            </Button>
        </Stack>
        <Stack align="center">
            <Button variant="ghost" size="small">
                Button
            </Button>
            <Button variant="ghost">Button</Button>
            <Button variant="ghost" size="large">
                Button
            </Button>
        </Stack>
    </Stack>
);
