import React from 'react';
import Styled from 'styled-components';

interface ITextProps {
  children?: React.ReactNode;
}

const DefaultProps = {
  children: ''
};

const TextElement = Styled.span``;

const Text = (props) => {
  const { children } = props;

  return <TextElement>{children}</TextElement>;
};

Text.defaultProps = DefaultProps;

export default Text;
