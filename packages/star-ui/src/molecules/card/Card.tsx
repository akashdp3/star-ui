import React, { Children } from 'react';
import Styled from 'styled-components';

interface ICardProps {
    /* children: can be anything */
    children: React.ReactNode;
    /* Custom styles */
    styles?: object;
}
const defaultProps = {};

const CardElement = Styled.div`
    box-sizing: border-box;
    /* Default width */
    width: 500px;
    /* Default solid border with 1px width and secondary light color */
    border: 1px solid ${(props: any) => props.theme.colors.secondary.light};
    padding: 16px;
    /* TODO: Use theme colors */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const Card = (props: ICardProps) => {
    const { children, styles } = props;

    return <CardElement style={styles}>{children}</CardElement>;
};

Card.defaultProps = defaultProps;
export default Card;
