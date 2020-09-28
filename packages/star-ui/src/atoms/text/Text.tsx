import React from 'react';
import Styled from 'styled-components';

import { getTextColor } from './text.helper';

type TextVariants =
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'default'
  | 'secondary';

interface ITextProps {
  size?: number;
  variant?: TextVariants;
  children: React.ReactNode;
  style?: object;
}
const defaultProps = {
  variant: 'default',
  style: {}
};

const TextElement = Styled.span`
  color: ${(props: any) => getTextColor(props)};
  font-size: ${(props: any) => props.theme.fontSizes[props.size]};
`;

const Text = (props: ITextProps) => {
  const { children, ...others } = props;

  return <TextElement {...others}>{children}</TextElement>;
};

Text.defaultProps = defaultProps;

export default Text;
