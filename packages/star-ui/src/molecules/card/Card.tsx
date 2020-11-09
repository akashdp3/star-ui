import React, { Children } from 'react';
import Styled from 'styled-components';

interface ICardProps {
    children: React.ReactNode;
    styles?: object;
}
const defaultProps = {};

const CardElement = Styled.div`
    box-sizing: border-box;
    width: 500px;
    border: 1px solid ${(props: any) => props.theme.colors.secondary.light};
    padding: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px
`;

const Card = (props: ICardProps) => {
    const { children, styles } = props;

    return <CardElement style={styles}>{children}</CardElement>;
};

Card.defaultProps = defaultProps;
export default Card;
