import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Grid from './Grid';

export default {
    title: 'Grid',
    component: Grid
} as Meta;

/*
 * Default grid
 * */
export const Default = () => {
    return (
        <Grid templateColumns="repeat(3, auto)">
            <p>Element A</p>
            <p>Element B</p>
            <p>Element C</p>
        </Grid>
    );
};

/**
 * Stack with horizontal direction
 */
export const Horizontal = () => {
    return (
        <Grid templateColumns="repeat(3, auto)">
            <p>Element A</p>
            <p>Element B</p>
            <p>Element C</p>
        </Grid>
    );
};

/**
 * Stack with vertical direction
 */
export const Vertical = () => {
    return (
        <Grid templateRows="repeat(3, auto)">
            <p>Element A</p>
            <p>Element B</p>
            <p>Element C</p>
        </Grid>
    );
};
