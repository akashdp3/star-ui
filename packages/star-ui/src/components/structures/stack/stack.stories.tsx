import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Stack from './Stack';

export default {
    title: 'Stack',
    component: Stack
} as Meta;

const Box = ({ children }: any) => {
    return (
        <div
            style={{
                border: '2px solid deepskyblue',
                backgroundColor: 'lightskyblue',
                padding: '16px',
                borderRadius: '4px',
                opacity: '0.8'
            }}
        >
            {children}
        </div>
    );
};

/**
 * Default stack
 */
export const Default = () => {
    return (
        <Stack>
            <Box>Box A</Box>
            <Box>Box B</Box>
            <Box>Box C</Box>
        </Stack>
    );
};

/**
 * Stack with horizontal direction
 */
export const Horizontal = () => {
    return (
        <Stack direction="horizontal">
            <Box>Box A</Box>
            <Box>Box B</Box>
            <Box>Box C</Box>
        </Stack>
    );
};

/**
 * Stack with vertical direction
 */
export const Vertical = () => {
    return (
        <Stack direction="vertical">
            <Box>Box A</Box>
            <Box>Box B</Box>
            <Box>Box C</Box>
        </Stack>
    );
};
