import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Stack from '../../structures/stack/Stack';
import Text from './Text';

export default {
    title: 'Atoms/Text',
    component: Text
} as Meta;

/*
 *  Stories:
 *  [x] Sample Text
 *  [x] Text with font size props
 *  [x] Text with color props
 *  [x] Text with align
 *  [x] Text with ellipsis
 *  [x] Custom Styles
 */

/**
 * Default Input
 */
export const Sample = () => {
    return <Text>Sample Text</Text>;
};

/**
 * Text with different colors
 */
export const Colors = () => {
    return (
        <Stack direction="vertical">
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text variant="primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text variant="secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text variant="success">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text variant="danger">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text variant="warning">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
        </Stack>
    );
};

/**
 * Text with different font sizes
 */
export const Sizes = () => {
    return (
        <Stack direction="vertical">
            <Text size={1}>Hello World</Text>
            <Text size={2}>Hello World</Text>
            <Text size={3}>Hello World</Text>
            <Text size={4}>Hello World</Text>
            <Text size={5}>Hello World</Text>
            <Text size={6}>Hello World</Text>
            <Text size={7}>Hello World</Text>
            <Text size={8}>Hello World</Text>
            <Text size={9}>Hello World</Text>
            <Text size={10}>Hello World</Text>
        </Stack>
    );
};

/**
 * Text with different alignments
 */
export const Align = () => {
    return (
        <Stack direction="vertical">
            <Text align="left">Left Aligned</Text>
            <Text align="center">Center Aligned</Text>
            <Text align="right">Right Aligned</Text>
        </Stack>
    );
};

/**
 * Text with ellipsis
 */
export const Ellipsis = () => {
    return (
        <Text width="100px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
    );
};

/**
 * Custom text
 */
export const Custom = () => {
    return (
        <Text style={{ backgroundColor: 'blue', color: 'white' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
    );
};
