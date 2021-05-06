import React from 'react';
import { Button, Stack } from 'react-star-ui';

import Example, { Section, Block } from '../components/Example';
import Table from '../components/Table';

const props = [
    {
        name: 'type',
        type: `'submit' | 'button' | 'reset'`,
        default: `'button'`
    },
    {
        name: 'variant',
        type: `'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'ghost'`,
        default: `'secondary'`
    },
    {
        name: 'size',
        type: `'small' | 'medium' | 'large'`,
        default: `'medium'`
    },
    {
        name: 'disabled',
        type: `true | false`,
        default: `false`
    }
];

const ButtonDocs = () => {
    return (
        <>
            <div className="mt-2 mb-6">
                <p className="text-2xl font-semibold">Button</p>
            </div>
            <Section>
                <Example title="Sample Button">
                    <Example.Preview>
                        <Button>Sample Button</Button>
                    </Example.Preview>
                    <Example.Code>{`<Button>Sample Button</Button>`}</Example.Code>
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
                        <Stack>
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="success">Success</Button>
                            <Button variant="danger">Danger</Button>
                            <Button variant="warning">Warning</Button>
                            <Button variant="ghost">Ghost</Button>
                        </Stack>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="success">Success</Button>
                            <Button variant="danger">Danger</Button>
                            <Button variant="warning">Warning</Button>
                            <Button variant="ghost">Ghost</Button>
                        `}
                    </Example.Code>
                </Example>
            </Section>
            <Section>
                <Example title="Disabled">
                    <Example.Preview>
                        <Stack>
                            <Button variant="primary" disabled>
                                Primary
                            </Button>
                            <Button variant="secondary" disabled>
                                Secondary
                            </Button>
                            <Button variant="success" disabled>
                                Success
                            </Button>
                            <Button variant="danger" disabled>
                                Danger
                            </Button>
                            <Button variant="warning" disabled>
                                Warning
                            </Button>
                            <Button variant="ghost" disabled>
                                Ghost
                            </Button>
                        </Stack>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <Button variant="primary" disabled>
                                Primary
                            </Button>
                            <Button variant="secondary" disabled>
                                Secondary
                            </Button>
                            <Button variant="success" disabled>
                                Success
                            </Button>
                            <Button variant="danger" disabled>
                                Danger
                            </Button>
                            <Button variant="warning" disabled>
                                Warning
                            </Button>
                            <Button variant="ghost" disabled>
                                Ghost
                            </Button>
                        `}
                    </Example.Code>
                </Example>
            </Section>
            <Section>
                <Example title="Sizes">
                    <Example.Preview>
                        <Stack direction="vertical">
                            <Stack align="center">
                                <Button variant="primary" size="small">
                                    Small
                                </Button>
                                <Button variant="primary">Medium</Button>
                                <Button variant="primary" size="large">
                                    Large
                                </Button>
                            </Stack>
                        </Stack>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <Button variant="primary" size="small">
                                Small
                            </Button>
                            <Button variant="primary">Medium</Button>
                            <Button variant="primary" size="large">
                                Large
                            </Button>
                        `}
                    </Example.Code>
                </Example>
            </Section>
        </>
    );
};

export default ButtonDocs;
