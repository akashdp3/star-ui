import React, { Children } from 'react';
import Styled from 'styled-components';

interface ICardProps {
    children: React.ReactNode;
    styles: object;
}
const defaultProps = {};

const CardElement = Styled.div``;

const Card = (props: ICardProps) => {
    const { children, styles } = props;

    return <CardElement style={styles}>{children}</CardElement>;
};

Card.defaultProps = defaultProps;
export default Card;
