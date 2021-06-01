import React from 'react';
import { Stack } from 'react-star-ui';

import Example, { Section, Block } from '../components/Example';
import Table from '../components/Table';

const Box = ({ children }) => {
    return (
        <div
            style={{
                border: '2px solid deepskyblue',
                backgroundColor: 'lightskyblue',
                padding: '16px',
                borderRadius: '4px',
                opacity: '0.8'
            }}
        >
            {children}
        </div>
    );
};

const props = [
    {
        name: 'children',
        type: 'React Node',
        default: `''`
    },
    {
        name: 'direction',
        type: `'horizontal' | 'ver'`,
        default: `'horizontal'`
    },
    {
        name: 'align',
        type: 'string',
        default: `''`
    },
    {
        name: 'gap',
        type: 'string',
        default: `'8px'`
    }
];

const StackDocs = () => {
    return (
        <>
            <div className="mt-2 mb-6">
                <p className="text-2xl font-semibold">Stack</p>
            </div>
            <Section>
                <Example className="Sample Stack">
                    <Example.Preview>
                        <Stack gap="16px">
                            <Box>Box A</Box>
                            <Box>Box B</Box>
                            <Box>Box C</Box>
                        </Stack>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <Stack gap="16px">
                                <Box>Box A</Box>
                                <Box>Box B</Box>
                                <Box>Box C</Box>
                            </Stack>
                        `}
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
                <Example title="Horizontal">
                    <Example.Preview>
                        <Stack direction="horizontal" gap="16px">
                            <Box>Box A</Box>
                            <Box>Box B</Box>
                            <Box>Box C</Box>
                        </Stack>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <Stack direction="horizontal" gap="16px">
                                <Box>Box A</Box>
                                <Box>Box B</Box>
                                <Box>Box C</Box>
                            </Stack>
                        `}
                    </Example.Code>
                </Example>
            </Section>
            <Section>
                <Example title="Vertical">
                    <Example.Preview>
                        <Stack direction="vertical" gap="16px">
                            <Box>Box A</Box>
                            <Box>Box B</Box>
                            <Box>Box C</Box>
                        </Stack>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <Stack direction="vertical" gap="16px">
                                <Box>Box A</Box>
                                <Box>Box B</Box>
                                <Box>Box C</Box>
                            </Stack>
                        `}
                    </Example.Code>
                </Example>
            </Section>
        </>
    );
};

export default StackDocs;
