import React from 'react';
import { Grid } from 'react-star-ui';

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
        name: 'templateColumns',
        type: 'string',
        default: `''`
    },
    {
        name: 'templateRows',
        type: 'string',
        default: `''`
    },
    {
        name: 'gap',
        type: 'string',
        default: `''`
    }
];

const GridDocs = () => {
    return (
        <>
            <div className="mt-2 mb-6">
                <p className="text-2xl font-semibold">Grid</p>
            </div>
            <Section>
                <Example className="Sample Grid">
                    <Example.Preview>
                        <Grid templateColumns="repeat(3, auto)" gap="16px">
                            <Box>Box A</Box>
                            <Box>Box B</Box>
                            <Box>Box C</Box>
                        </Grid>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <Grid templateColumns="repeat(3, auto)" gap="16px">
                                <Box>Box A</Box>
                                <Box>Box B</Box>
                                <Box>Box C</Box>
                            </Grid>
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
                        <Grid templateColumns="repeat(3, auto)" gap="16px">
                            <Box>Box A</Box>
                            <Box>Box B</Box>
                            <Box>Box C</Box>
                        </Grid>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <Grid templateColumns="repeat(3, auto)" gap="16px">
                                <Box>Box A</Box>
                                <Box>Box B</Box>
                                <Box>Box C</Box>
                            </Grid>
                        `}
                    </Example.Code>
                </Example>
            </Section>
            <Section>
                <Example title="Vertical">
                    <Example.Preview>
                        <Grid templateRows="repeat(3, auto)" gap="16px">
                            <Box>Box A</Box>
                            <Box>Box B</Box>
                            <Box>Box C</Box>
                        </Grid>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <Grid templateRows="repeat(3, auto)" gap="16px">
                                <Box>Box A</Box>
                                <Box>Box B</Box>
                                <Box>Box C</Box>
                            </Grid>
                        `}
                    </Example.Code>
                </Example>
            </Section>
        </>
    );
};

export default GridDocs;
