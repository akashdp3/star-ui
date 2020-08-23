import React from 'react';
import Styled from 'styled-components';

interface IParagraphProps {
  children?: React.ReactNode;
}

const DefaultProps = {
  children: ''
};

const ParagraphElement = Styled.p``;

const Paragraph = (props) => {
  const { children } = props;

  return <ParagraphElement>{children}</ParagraphElement>;
};

Paragraph.defaultProps = DefaultProps;

export default Paragraph;
