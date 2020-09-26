import React from 'react';
import Styled from 'styled-components';

interface IParagraphProps {
  children?: React.ReactNode;
}

const defaultProps = {
  children: null
};

const ParagraphElement = Styled.p``;

const Paragraph = (props: IParagraphProps) => {
  const { children, ...others } = props;

  return <ParagraphElement {...others}>{children}</ParagraphElement>;
};

Paragraph.defaultProps = defaultProps;

export default Paragraph;
