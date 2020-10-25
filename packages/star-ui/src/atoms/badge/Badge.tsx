import React from 'react';
import Styled from 'styled-components';

interface IBadgeProps {
    children: React.ReactNode;
    size?: number;
    style?: object;
}
const defaultProps = {};

const BadgeElement = Styled.span`
  font-size: ${(props: any) => props.theme.fontSizes[props.size]};
  padding: 4px;
  background-color: ${(props: any) =>
      props.backgroundColor || props.theme.colors.secondary.lighter};
  color: ${(props: any) => props.color || props.theme.colors.secondary.darker};
  border-radius: 2px 4px;
`;

const Badge = (props: IBadgeProps) => {
    const { children, ...others } = props;

    return <BadgeElement {...others}>{children}</BadgeElement>;
};

Badge.defaultProps = defaultProps;
export default Badge;
