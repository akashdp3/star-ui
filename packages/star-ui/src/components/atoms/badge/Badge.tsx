import * as React from 'react';

import { Element } from '../../../primitives';

type BadgeVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

interface IBadgeProps {
    /* children: preferred string type */
    children: React.ReactNode;
    /* color: Custom text color */
    color?: string;
    /* backgroundColor: Custom background color */
    backgroundColor?: string;
    /* variant: Different variant can have different styles */
    variant?: BadgeVariants;
}
const DEFAULT_PROPS = {
    variant: 'secondary'
};

const Badge = (props: IBadgeProps) => {
    return <Element as="span" component="Badge" {...props} />;
};

Badge.defaultProps = DEFAULT_PROPS;
export default Badge;
