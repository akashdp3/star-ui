import React from 'react';

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

const Section = ({ children }) => {
    return <div className="mb-4">{children}</div>;
};

const Example = (props) => {
    const { title, description, children } = props;

    return (
        <>
            <Section>
                <h3 className="mb-4 text-xl font-bold">{title}</h3>
                <p>{description}</p>
            </Section>
            <Section>
                <div>{children}</div>
            </Section>
        </>
    );
};

const Preview = (props) => {
    const { children } = props;

    return (
        <Section>
            <div
                style={{ borderWidth: '1px' }}
                className="p-10 border-gray-300 border-2 rounded-md"
            >
                {children}
            </div>
        </Section>
    );
};

const Code = (props) => {
    const { language, children } = props;
    console.log(children);

    const html = highlight(dedent(children || ''), languages['jsx']);

    return (
        <Section>
            <pre>
                <code className={`language-${language}`}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: html
                        }}
                    ></div>
                </code>
            </pre>
        </Section>
    );
};

Example.Preview = Preview;
Example.Code = Code;
export default Example;
