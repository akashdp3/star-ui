import React from 'react';
import Styled from 'styled-components';

type StackDirections = 'horizontal' | 'vertical';

interface IStackProps {
    direction?: StackDirections;
    children: React.ReactNode;
    style?: object;
}
const defaultProps = {
    direction: 'horizontal'
};

const StackElement = Styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props: any) =>
      props.direction === 'vertical' ? 'column' : 'row'};
  gap: 8px;
`;

const StackComponent = (props: IStackProps) => {
    const { children, ...others } = props;

    return <StackElement {...others}>{children}</StackElement>;
};

StackComponent.defaultProps = defaultProps;

export default StackComponent;
