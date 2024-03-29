import * as React from 'react';

import { Element } from '../../../primitives';

type AlertVariants = 'error' | 'success' | 'warning' | 'info';
interface IAlertProps {
    variant?: AlertVariants;
}
const DEFAULT_PROPS = {
    variant: 'error'
};

const Alert = (props: IAlertProps) => (
    <Element as="div" component="Alert" {...props} />
);

Alert.defaultProps = DEFAULT_PROPS;
export default Alert;
