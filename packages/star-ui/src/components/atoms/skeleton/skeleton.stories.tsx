import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Skeleton } from '../../../index';

export default {
    title: 'Atoms/Skeleton',
    component: Skeleton
} as Meta;

export const Default = () => {
    return (
        <div style={{ margin: '20px', height: '40px' }}>
            <Skeleton />
        </div>
    );
};

export const Behavior = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    });

    return (
        <div style={{ margin: '20px', height: '40px' }}>
            <Skeleton isLoading={loading}>
                <p>This is a skeleton loader</p>
            </Skeleton>
        </div>
    );
};

export const Repeat = () => {
    return (
        <div style={{ margin: '20px', height: '40px' }}>
            <Skeleton repeatCount={5}>
                <p>This is a skeleton loader</p>
            </Skeleton>
        </div>
    );
};
