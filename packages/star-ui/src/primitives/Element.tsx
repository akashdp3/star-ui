import * as React from 'react';
import merge from 'deepmerge';
import Styled, { withTheme, DefaultTheme } from 'styled-components';

interface IElementProps {
    component: string;
    as?: string;
    variant?: string;
    children?: React.ReactNode;
    css?: { [key: string]: string };
    theme?: DefaultTheme;
}

const Element = (props: IElementProps) => {
    const {
        as: tag = 'div',
        theme,
        css = {},
        component,
        variant,
        children
    } = props;

    if (!theme) {
        return null;
    }

    // Theme styles
    let componentStyles = {};
    if (theme.components[component]) {
        componentStyles = { ...theme.components[component] };
        if (
            variant &&
            theme.components[component].variants &&
            theme.components[component].variants[variant]
        ) {
            componentStyles = merge(
                componentStyles,
                theme.components[component].variants[variant]
            );
        }
    }
    console.log({ componentStyles });

    const element = () => React.createElement(tag, null, children);
    const StyledElement = Styled(element)({
        ...merge(css, componentStyles)
    });

    return React.createElement(StyledElement, props);
};

export default withTheme(Element);
