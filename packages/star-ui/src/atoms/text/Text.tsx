import React from 'react';
import Styled from 'styled-components';

type TextSizes = 'small' | 'normal' | 'big';
type TextVariants = 'primary' | 'success' | 'danger' | 'warning' | 'normal';

interface ITextProps {
  size?: TextSizes;
  variant?: TextVariants;
  children: React.ReactNode;
}
const DefaultProps = {
  size: 'normal',
  variant: 'normal'
};

const TextElement = Styled.span`
  color: ${(props) => {
    console.log(props);
  }}
`;

const Text = (props: ITextProps) => {
  const { children } = props;

  return <TextElement>{children}</TextElement>;
};

Text.defaultProps = DefaultProps;

export default Text;
