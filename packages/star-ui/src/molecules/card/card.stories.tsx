import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Card from './Card';

export default {
    title: 'Card',
    component: Card
} as Meta;

/**
 * Stories
 * [x] Card with shadow-box
 */

/**
 * Default Card
 */
export const Default = () => {
    return (
        <Card>
            <div style={{ padding: '20px' }}>Hello World</div>
        </Card>
    );
};
