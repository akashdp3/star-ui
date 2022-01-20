import * as React from 'react';
import merge from 'deepmerge';
import Styled, { withTheme, DefaultTheme } from 'styled-components';

interface IElementProps {
    component: string;
    as?: string;
    variant?: string;
    size?: string;
    children?: React.ReactNode;
    css?: {
        [key: string]: string;
    };
    theme?: DefaultTheme | undefined;
}

const Component = Styled.div(({ css }) => ({
    ...css
}));

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

    return (
        <Component
            {...props}
            as={tag}
            css={{ ...merge(css, componentStyles) }}
        />
    );
};

export default withTheme(Element);
