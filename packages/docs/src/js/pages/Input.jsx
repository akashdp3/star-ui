import React from 'react';
import { Stack, Input } from 'react-star-ui';

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

const InputDocs = () => (
    <>
        <div className="mt-2 mb-6">
            <p className="text-2xl font-semibold">Input</p>
        </div>
        <Section>
            <Example title="Sample Input">
                <Example.Preview>
                    <Input placeholder="Sample Input" />
                </Example.Preview>
                <Example.Code>
                    {`<Input placeholder="Sample Input" />`}
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
                        <Input placeholder="Normal Input" />
                        <Input placeholder="Disabled Input" disabled />
                        <Input placeholder="Invalid Input" invalid />
                    </Stack>
                </Example.Preview>
                <Example.Code>
                    {`
                        <Input placeholder="Normal Input" />
                        <Input placeholder="Disabled Input" disabled />
                        <Input placeholder="Invalid Input" invalid />
                    `}
                </Example.Code>
            </Example>
        </Section>
    </>
);

export default InputDocs;
