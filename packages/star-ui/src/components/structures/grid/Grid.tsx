import * as React from 'react';
import Styled from 'styled-components';

interface IGrid {
    templateColumns?: string;
    templateRows?: string;
    gap?: string;
    children: React.ReactNode;
}
const GRID_DEFAULT_PROPS = {
    template: '',
    gap: ''
};

const Element = Styled.div`
    display: grid;

    ${(props: any) =>
        props.templateColumns &&
        `
        grid-template-columns: ${props.templateColumns};
    `}

    ${(props: any) =>
        props.templateRows &&
        `
        grid-template-rows: ${props.templateRows};
    `}
`;

const Grid = (props: IGrid) => {
    const { children, ...others } = props;

    return <Element {...others}>{children}</Element>;
};

Grid.defaultProps = GRID_DEFAULT_PROPS;
export default Grid;
