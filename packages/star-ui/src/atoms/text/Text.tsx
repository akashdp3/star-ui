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
type TextAligns = 'left' | 'center' | 'right';

interface ITextProps {
    align?: TextAligns;
    size?: number;
    variant?: TextVariants;
    width?: string;
    children: React.ReactNode;
    style?: object;
}
const defaultProps = {
    align: 'left',
    variant: 'default',
    style: {}
};

const TextElement = Styled.span`
  color: ${(props: any) => getTextColor(props)};
  font-size: ${(props: any) => props.theme.fontSizes[props.size]};
  text-align: ${(props: any) => props.align};
  max-width: ${(props: any) => props.width};
  white-space: ${(props: any) => props.width && 'nowrap'};
  overflow: ${(props: any) => props.width && 'hidden'};
  text-overflow: ${(props: any) => props.width && 'ellipsis'};
  display: ${(props: any) => props.width && 'block'};
`;

const Text = (props: ITextProps) => {
    const { children, ...others } = props;

    return <TextElement {...others}>{children}</TextElement>;
};

Text.defaultProps = defaultProps;
export default Text;
