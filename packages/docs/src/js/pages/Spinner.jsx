import React from 'react';
import { Stack, Spinner } from 'react-star-ui';

import Example, { Section, Block } from '../components/Example';
import Table from '../components/Table';

const props = [
    {
        name: 'size',
        type: `'sm' | 'md' | 'lg'`,
        default: `'md'`
    }
];

const SpinnerDocs = () => (
    <>
        <div className="mt-2 mb-6">
            <p className="text-2xl font-semibold">Spinner</p>
        </div>
        <Section>
            <Example title="Sample Spinner">
                <Example.Preview>
                    <Spinner />
                </Example.Preview>
                <Example.Code>{`<Spinner />`}</Example.Code>
            </Example>
        </Section>
        <Section>
            <Block>
                <h3 className="text-lg font-semibold">Props</h3>
            </Block>
            <Table tableRows={props} />
        </Section>
        <Section>
            <Example title="Sizes">
                <Example.Preview>
                    <Stack>
                        <Spinner size="sm" />
                        <Spinner size="md" />
                        <Spinner size="lg" />
                    </Stack>
                </Example.Preview>
                <Example.Code>
                    {`
                        <Spinner size="sm" />
                        <Spinner size="md" />
                        <Spinner size="lg" />
                    `}
                </Example.Code>
            </Example>
        </Section>
    </>
);

export default SpinnerDocs;
