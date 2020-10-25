import React from 'react';

import Heading from './Heading';
import { Stack } from '../../index';

export default {
    title: 'Heading',
    component: Heading
};

export const Default = () => {
    return <Heading>Default</Heading>;
};

export const AllHeadings = () => {
    return (
        <Stack direction="vertical">
            <Heading as="h1">Hello World</Heading>
            <Heading as="h2">Hello World</Heading>
            <Heading as="h3">Hello World</Heading>
            <Heading as="h4">Hello World</Heading>
            <Heading as="h5">Hello World</Heading>
            <Heading as="h6">Hello World</Heading>
        </Stack>
    );
};
