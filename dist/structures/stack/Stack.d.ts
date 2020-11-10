import React from 'react';
declare type StackDirections = 'horizontal' | 'vertical';
interface IStackProps {
    direction?: StackDirections;
    children: React.ReactNode;
    style?: object;
}
declare const StackComponent: {
    (props: IStackProps): JSX.Element;
    defaultProps: {
        direction: string;
    };
};
export default StackComponent;
