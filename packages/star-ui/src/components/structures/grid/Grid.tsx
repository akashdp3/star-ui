import * as React from 'react';

import { Element } from '../../../primitives';

interface IGrid {
    templateColumns?: string;
    templateRows?: string;
    gap?: string;
    children: React.ReactNode;
}
const DEFAULT_PROPS = {
    templateRows: '',
    templateColumns: '',
    gap: ''
};

const Grid = (props: IGrid) => {
    const { children, templateRows, templateColumns, gap } = props;
    let css = {
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        gridGap: gap
    };

    return (
        // @ts-ignore
        <Element as="div" component="Grid" css={css}>
            {children}
        </Element>
    );
};

Grid.defaultProps = DEFAULT_PROPS;
export default Grid;
