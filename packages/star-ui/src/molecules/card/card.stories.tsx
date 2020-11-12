import React from 'react';

import Card from './Card';

export default {
    title: 'Card',
    component: Card
};

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
