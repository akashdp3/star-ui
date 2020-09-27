import React from 'react';
import Styled from 'styled-components';

type StackDirections = 'horizontal' | 'vertical';

interface IStackProps {
  direction?: StackDirections;
  children: React.ReactNode;
}
const defaultProps = {
  direction: 'horizontal'
};

const StackElement = Styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props: { flexDirection: string }) => props.flexDirection};
`;

const StackComponent = (props: IStackProps) => {
  const { children, direction, ...others } = props;
  let flexDirection = 'row';
  if (direction === 'vertical') {
    flexDirection = 'column';
  }

  return (
    <StackElement flexDirection={flexDirection} {...others}>
      {children}
    </StackElement>
  );
};

StackComponent.defaultProps = defaultProps;

export default StackComponent;
