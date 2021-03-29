import * as React from 'react';
import Styled from 'styled-components';

type StackDirections = 'horizontal' | 'vertical';

interface IStackProps {
    /* direction: stack direction('vertical', 'horizontal') */
    direction?: StackDirections;
    /* children: can be anything */
    children: React.ReactNode;
    /* align items */
    align?: string;
}
const defaultProps = {
    direction: 'horizontal'
};

const StackElement = Styled.div`
    display: flex;
    flex-direction: ${(props: any) =>
        props.direction === 'vertical' ? 'column' : 'row'};
    gap: 8px;

    ${(props: any) => props.align && `
        align-items: ${props.align};
    `}
`;

const StackComponent = (props: IStackProps) => {
    const { children, ...others } = props;

    return <StackElement {...others}>{children}</StackElement>;
};

StackComponent.defaultProps = defaultProps;
export default StackComponent;
