import React from 'react';
import { Stack, Text } from 'react-star-ui';

import Example, { Section, Block } from '../components/Example';
import Table from '../components/Table';

const props = [
    {
        name: 'align',
        type: `'left' | 'center' | 'right'`,
        default: `'left'`
    },
    {
        name: 'variant',
        type: `'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'`,
        default: `'default'`
    },
    {
        name: 'width',
        type: 'string',
        default: ''
    },
    {
        name: 'children',
        type: 'React Node',
        default: ''
    }
];

const TextDocs = () => (
    <>
        <div className="mt-2 mb-6">
            <p className="text-2xl font-semibold">Text</p>
        </div>
        <Section>
            <Example title="Sample Text">
                <Example.Preview>
                    <Text>Sample Text</Text>
                </Example.Preview>
                <Example.Code>
                    {`
                        <Text>Sample Text</Text>
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
            <Example title="Variants">
                <Example.Preview>
                    <Stack direction="vertical">
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Text>
                        <Text variant="primary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Text>
                        <Text variant="secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Text>
                        <Text variant="success">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Text>
                        <Text variant="danger">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Text>
                        <Text variant="warning">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Text>
                    </Stack>
                </Example.Preview>
                <Example.Code>
                    {`
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </Text>
                        <Text variant="primary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </Text>
                        <Text variant="secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </Text>
                        <Text variant="success">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </Text>
                        <Text variant="danger">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </Text>
                        <Text variant="warning">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </Text>
                    `}
                </Example.Code>
            </Example>
        </Section>
        <Section>
            <Example title="Sizes">
                <Example.Preview>
                    <Stack direction="vertical">
                        <Text size={1}>Hello World</Text>
                        <Text size={2}>Hello World</Text>
                        <Text size={3}>Hello World</Text>
                        <Text size={4}>Hello World</Text>
                        <Text size={5}>Hello World</Text>
                        <Text size={6}>Hello World</Text>
                        <Text size={7}>Hello World</Text>
                        <Text size={8}>Hello World</Text>
                        <Text size={9}>Hello World</Text>
                        <Text size={10}>Hello World</Text>
                    </Stack>
                </Example.Preview>
                <Example.Code>
                    {`
                        <Text size={1}>Hello World</Text>
                        <Text size={2}>Hello World</Text>
                        <Text size={3}>Hello World</Text>
                        <Text size={4}>Hello World</Text>
                        <Text size={5}>Hello World</Text>
                        <Text size={6}>Hello World</Text>
                        <Text size={7}>Hello World</Text>
                        <Text size={8}>Hello World</Text>
                        <Text size={9}>Hello World</Text>
                        <Text size={10}>Hello World</Text>
                    `}
                </Example.Code>
            </Example>
        </Section>
        <Section>
            <Example title="Alignment">
                <Example.Preview>
                    <Stack direction="vertical">
                        <Text align="left">Left Aligned</Text>
                        <Text align="center">Center Aligned</Text>
                        <Text align="right">Right Aligned</Text>
                    </Stack>
                </Example.Preview>
                <Example.Code>
                    {`
                        <Text align="left">Left Aligned</Text>
                        <Text align="center">Center Aligned</Text>
                        <Text align="right">Right Aligned</Text>
                    `}
                </Example.Code>
            </Example>
        </Section>
        <Section>
            <Example title="Ellipsis">
                <Example.Preview>
                    <Text width="100px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Text>
                </Example.Preview>
                <Example.Code>
                    {`
                        <Text width="100px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </Text>
                    `}
                </Example.Code>
            </Example>
        </Section>
    </>
);

export default TextDocs;
