import React from 'react';
import Styled from 'styled-components';

interface IStackProps {
  children: React.ReactNode;
}

const StackWrapper = Styled.div`
  display: flex;
  justify-content: space-between;
`;

const StackComponent = (props: IStackProps) => {
  const { children } = props;

  return <StackWrapper>{children}</StackWrapper>;
};

export default StackComponent;
