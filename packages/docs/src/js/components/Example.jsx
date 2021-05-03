import React from 'react';
import Styled from 'styled-components';

import dedent from 'dedent';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-highlight/prism-line-highlight';

const Pre = Styled.pre`
    box-sizing: border-box;
    background-color: rgb(0, 0, 0);
    color: rgb(245, 250, 255);
    padding: 16px;
    font-size: 14px;
    overflow: auto;
    margin: 0px;
`;

export const Section = ({ children }) => {
    return <div className="mb-28">{children}</div>;
};

const Block = ({ children }) => {
    return <div className="mb-4">{children}</div>;
};

const Example = (props) => {
    const { title, children } = props;

    return (
        <>
            <Block>
                <h3 className="text-lg font-semibold">{title}</h3>
            </Block>
            <Block>
                <div>{children}</div>
            </Block>
        </>
    );
};

const Preview = (props) => {
    const { children } = props;

    return (
        <div>
            <div
                style={{ borderWidth: '1px' }}
                className="p-10 border-gray-300 border-2 rounded-md rounded-b-none"
            >
                {children}
            </div>
        </div>
    );
};

const Code = (props) => {
    const { children } = props;
    console.log(children);

    const html = highlight(dedent(children || ''), languages['jsx']);

    return (
        <div>
            <Pre style={{ margin: '0' }} className="rounded-md rounded-t-none">
                <code className="language-jsx">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: html
                        }}
                    ></div>
                </code>
            </Pre>
        </div>
    );
};

Example.Preview = Preview;
Example.Code = Code;

export default Example;
