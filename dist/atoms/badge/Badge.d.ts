import React from 'react';
declare type BadgeVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
interface IBadgeProps {
    children: React.ReactNode;
    size?: number;
    style?: object;
    color?: string;
    backgroundColor?: string;
    variant?: BadgeVariants;
}
declare const Badge: {
    (props: IBadgeProps): JSX.Element;
    defaultProps: {
        variant: string;
    };
};
export default Badge;
