import * as React from 'react';
import Styled from 'styled-components';

import { getAppearance } from './alert.helper';

type AlertVariants = 'error' | 'success' | 'warning' | 'info';
interface IAlertProps {
    children?: React.ReactNode;
    variant?: AlertVariants;
}
const DEFAULT_PROPS = {
    variant: 'error'
};

const Element = Styled.div`
    padding: 12px;
    border-radius: 2px;
    line-height: 1;

    color: ${(props: any) => getAppearance(props).color};
    background-color: ${(props: any) => getAppearance(props).backgroundColor};
`;

const Alert = (props: IAlertProps) => {
    const { children, ...others } = props;

    return <Element {...others}>{children}</Element>;
};

Alert.defaultProps = DEFAULT_PROPS;
export default Alert;
