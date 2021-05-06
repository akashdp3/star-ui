import React from 'react';
import { CheckBox, Stack } from 'react-star-ui';

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

const CheckBoxDocs = () => {
    return (
        <>
            <div className="mt-2 mb-6">
                <p className="text-2xl font-semibold">CheckBox</p>
            </div>
            <Section>
                <Example title="Sample CheckBox">
                    <Example.Preview>
                        <CheckBox label="Sample CheckBox" />
                    </Example.Preview>
                    <Example.Code>{`<CheckBox label="Sample CheckBox" />`}</Example.Code>
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
                            <CheckBox label="Default" />
                            <CheckBox label="Selected" checked />
                            <CheckBox label="Disabled" disabled />
                        </Stack>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <CheckBox label="Default" />
                            <CheckBox label="Selected" checked />
                            <CheckBox label="Disabled" disabled />
                        `}
                    </Example.Code>
                </Example>
            </Section>
        </>
    );
};

export default CheckBoxDocs;
