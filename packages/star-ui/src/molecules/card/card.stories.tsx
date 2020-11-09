import React from 'react';

import Card from './Card';

export default {
    title: 'Card',
    component: Card
};

/**
 * Stories
 * [ ] Card with shadow-box
 */

export const Default = () => {
    return (
        <Card>
            <div style={{ padding: '20px' }}>Hello World</div>
        </Card>
    );
};
