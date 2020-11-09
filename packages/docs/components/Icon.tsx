import React from 'react';

interface IIconProps {
    icon: any;
    onClick: Function;
}

const Icon = (props: IIconProps) => {
    const { icon: Icon, ...others } = props;

    return <Icon size="1.5em" style={{ cursor: 'pointer' }} {...others} />;
};

export default Icon;
