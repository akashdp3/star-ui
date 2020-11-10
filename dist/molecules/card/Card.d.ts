import React from 'react';
interface ICardProps {
    children: React.ReactNode;
    styles?: object;
}
declare const Card: {
    (props: ICardProps): JSX.Element;
    defaultProps: {};
};
export default Card;
