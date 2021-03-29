import * as React from 'react';

import { Element } from '../../../primitives';

interface ICardProps {
    /* children: can be anything */
    children: React.ReactNode;
    /* Custom styles */
    styles?: object;
}
const DEFAULT_PROPS = {};

const Card = (props: ICardProps) => {
    return <Element as="div" component="Card" {...props} />;
};

Card.defaultProps = DEFAULT_PROPS;
export default Card;
