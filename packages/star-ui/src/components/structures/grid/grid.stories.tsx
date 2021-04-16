import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Grid from './Grid';

export default {
    title: 'Structures/Grid',
    component: Grid
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

/*
 * Default grid
 * */
export const Default = () => {
    return (
        <Grid templateColumns="repeat(3, auto)" gap="16px">
            <Box>Box A</Box>
            <Box>Box B</Box>
            <Box>Box C</Box>
        </Grid>
    );
};

/**
 * Stack with horizontal direction
 */
export const Horizontal = () => {
    return (
        <Grid templateColumns="repeat(3, auto)" gap="16px">
            <Box>Box A</Box>
            <Box>Box B</Box>
            <Box>Box C</Box>
        </Grid>
    );
};

/**
 * Stack with vertical direction
 */
export const Vertical = () => {
    return (
        <Grid templateRows="repeat(3, auto)" gap="16px">
            <Box>Box A</Box>
            <Box>Box B</Box>
            <Box>Box C</Box>
        </Grid>
    );
};
