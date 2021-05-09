import React from 'react';
import { Heading } from 'react-star-ui';

import Example, { Section, Block } from '../components/Example';
import Table from '../components/Table';

const props = [
    {
        name: 'children',
        type: 'React Node',
        default: ''
    },
    {
        name: 'as',
        type: `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'`,
        default: `'h1'`
    }
];

const HeadingDocs = () => (
    <>
        <div className="mt-2 mb-6">
            <p className="text-2xl font-semibold">Heading</p>
        </div>
        <Section>
            <Example title="Sample Heading">
                <Example.Preview>
                    <Heading>Sample Heading</Heading>
                </Example.Preview>
                <Example.Code>
                    {`<Heading>Sample Heading</Heading>`}
                </Example.Code>
            </Example>
        </Section>
        <Section>
            <Block>
                <h3 className="text-lg font-semibold">Props</h3>
            </Block>
            <Table tableRows={props} />
        </Section>
        {/* <Section>
            <Example title="All Variants">
                <Example.Preview>
                    <Stack direction="vertical">
                        <Heading as="h1">Hello World</Heading>
                        <Heading as="h2">Hello World</Heading>
                        <Heading as="h3">Hello World</Heading>
                        <Heading as="h4">Hello World</Heading>
                        <Heading as="h5">Hello World</Heading>
                        <Heading as="h6">Hello World</Heading>
                    </Stack>
                </Example.Preview>
                <Example.Code>
                    {`
                        <Heading as="h1">Hello World</Heading>
                        <Heading as="h2">Hello World</Heading>
                        <Heading as="h3">Hello World</Heading>
                        <Heading as="h4">Hello World</Heading>
                        <Heading as="h5">Hello World</Heading>
                        <Heading as="h6">Hello World</Heading>
                    `}
                </Example.Code>
            </Example>
        </Section> */}
    </>
);

export default HeadingDocs;
