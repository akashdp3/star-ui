import React from 'react';
import Styled from 'styled-components';

import { getTextColor } from './text.helper';

type TextSizes = 'small' | 'normal' | 'big';
type TextVariants =
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'default'
  | 'secondary';

interface ITextProps {
  size?: TextSizes;
  variant?: TextVariants;
  children: React.ReactNode;
  style?: object;
}
const defaultProps = {
  size: 'normal',
  variant: 'normal',
  style: {}
};

const TextElement = Styled.span`
  color: ${(props: any) => getTextColor(props)};
`;

const Text = (props: ITextProps) => {
  const { children, ...others } = props;

  return <TextElement {...others}>{children}</TextElement>;
};

Text.defaultProps = defaultProps;

export default Text;
