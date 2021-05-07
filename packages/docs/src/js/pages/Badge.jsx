import React from 'react';
import { Stack, Badge } from 'react-star-ui';

import Example, { Section, Block } from '../components/Example';
import Table from '../components/Table';

const BadgeDocs = () => {
    return (
        <>
            <div className="mt-2 mb-6">
                <p className="text-2xl font-semibold">Badge</p>
                <p>Badges</p>
            </div>
            <Section>
                <Example title="Sample Badge">
                    <Example.Preview>
                        <Badge>Sample Badge</Badge>
                    </Example.Preview>
                    <Example.Code>{`<Badge>Default</Badge>`}</Example.Code>
                </Example>
            </Section>
            <Section>
                <Block>
                    <h3 className="text-lg font-semibold">Props</h3>
                </Block>
                <Table
                    tableRows={[
                        {
                            name: 'variant',
                            type: `'primary' | 'secondary' | 'success' | 'danger' | 'warning'`,
                            default: `'secondary'`
                        }
                    ]}
                />
            </Section>
            <Section>
                <Example title="Variants">
                    <Example.Preview>
                        <Stack>
                            <Badge variant="primary">Primary</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="success">Success</Badge>
                            <Badge variant="danger">Danger</Badge>
                            <Badge variant="warning">Warning</Badge>
                        </Stack>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <Badge variant="primary">Primary</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="success">Success</Badge>
                            <Badge variant="danger">Danger</Badge>
                            <Badge variant="warning">Warning</Badge>
                        `}
                    </Example.Code>
                </Example>
            </Section>
        </>
    );
};

export default BadgeDocs;
