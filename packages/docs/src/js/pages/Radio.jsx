import React from 'react';
import { Stack, Radio } from 'react-star-ui';

import Example, { Section, Block } from '../components/Example';
import Table from '../components/Table';

const props = [
    {
        name: 'label',
        type: 'string',
        default: `''`
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: `'false'`
    },
    {
        name: 'checked',
        type: 'boolean',
        default: `'false'`
    }
];

const RadioDocs = () => (
    <>
        <div className="mt-2 mb-6">
            <p className="text-2xl font-semibold">Radio</p>
        </div>
        <Section>
            <Example title="Sample Radio">
                <Example.Preview>
                    <Radio label="Sample Radio Button" />
                </Example.Preview>
                <Example.Code>
                    {`<Radio label="Sample Radio Button" />`}
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
                        <Radio label="Default State" />
                        <Radio label="Selected State" checked />
                        <Radio label="Disabled State" disabled />
                    </Stack>
                </Example.Preview>
                <Example.Code>
                    {`
                        <Radio label="Default State" />
                        <Radio label="Selected State" checked />
                        <Radio label="Disabled State" disabled />
                    `}
                </Example.Code>
            </Example>
        </Section>
    </>
);

export default RadioDocs;
