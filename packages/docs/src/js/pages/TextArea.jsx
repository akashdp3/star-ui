import React from 'react';
import { Stack, TextArea } from 'react-star-ui';

import Example, { Section, Block } from '../components/Example';
import Table from '../components/Table';

const props = [
    {
        name: 'placeholder',
        type: 'string',
        default: `''`
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: `'false'`
    },
    {
        name: 'invalid',
        type: 'boolean',
        default: `'false'`
    }
];

const TextAreaDocs = () => (
    <>
        <div className="mt-2 mb-6">
            <p className="text-2xl font-semibold">Input</p>
        </div>
        <Section>
            <Example title="Sample Input">
                <Example.Preview>
                    <TextArea placeholder="Sample Input" />
                </Example.Preview>
                <Example.Code>
                    {`<TextArea placeholder="Sample Input" />`}
                </Example.Code>
            </Example>
        </Section>
        <Section>
            <Block>
                <h3 className="text-lg font-semibold">Props</h3>
            </Block>
            <Table tableRows={props} />
        </Section>
        <Section>
            <Example title="All States">
                <Example.Preview>
                    <Stack direction="vertical">
                        <TextArea placeholder="Normal Input" />
                        <TextArea placeholder="Disabled Input" disabled />
                        <TextArea placeholder="Invalid Input" invalid />
                    </Stack>
                </Example.Preview>
                <Example.Code>
                    {`
                        <TextArea placeholder="Normal Input" />
                        <TextArea placeholder="Disabled Input" disabled />
                        <TextArea placeholder="Invalid Input" invalid />
                    `}
                </Example.Code>
            </Example>
        </Section>
    </>
);

export default TextAreaDocs;
