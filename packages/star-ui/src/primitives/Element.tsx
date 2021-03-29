import * as React from 'react';
import merge from 'deepmerge';
import Styled, { withTheme, DefaultTheme } from 'styled-components';

interface IElementProps {
    component: string;
    as?: string;
    variant?: string;
    size?: string;
    children?: React.ReactNode;
    css?: any;
    theme?: DefaultTheme;
}

const Element = (props: IElementProps) => {
    const {
        as: tag = 'div',
        theme,
        css = {},
        component,
        variant,
        size,
        children
    } = props;

    if (!theme) {
        return null;
    }

    // Theme styles
    let componentStyles = {};
    if (theme.components[component]) {
        componentStyles = { ...theme.components[component] };
        // Different Variant styles
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

        // Different Size styles
        if (
            size &&
            theme.components[component].sizes &&
            theme.components[component].sizes[size]
        ) {
            componentStyles = merge(
                componentStyles,
                theme.components[component].sizes[size]
            );
        }
    }

    const element = () => React.createElement(tag, null, children);
    const StyledElement = Styled(element)({
        ...merge(css, componentStyles)
    });

    return React.createElement(StyledElement, props);
};

export default withTheme(Element);
