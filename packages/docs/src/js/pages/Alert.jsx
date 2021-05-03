import React from 'react';
import { Stack, Alert } from 'react-star-ui';

import Example, { Section } from '../components/Example';
import Table from '../components/Table';

const AlertDocs = () => {
    return (
        <>
            <div className="mt-2 mb-6">
                <p className="text-2xl font-semibold">Alert</p>
                <p>Alerts are used to notify user.</p>
            </div>
            <Section>
                <Example title="Sample Alert">
                    <Example.Preview>
                        <Alert>Sample Aler</Alert>
                    </Example.Preview>
                    <Example.Code>{`<Alert>Sample Alert</Alert>`}</Example.Code>
                </Example>
            </Section>
            <Section>
                <Example title="Props">
                    <Table
                        tableRows={[
                            {
                                name: 'variant',
                                type: `'error' | 'success' | 'warning' | 'info'`,
                                default: `'error'`
                            }
                        ]}
                    />
                </Example>
            </Section>
            <Section>
                <Example title="Variants">
                    <Example.Preview>
                        <Stack direction="vertical">
                            <Alert variant="error">Error Alert</Alert>
                            <Alert variant="success">Success Alert</Alert>
                            <Alert variant="warning">Warning Alert</Alert>
                            <Alert variant="info">Info Alert</Alert>
                        </Stack>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <Alert variant="error">Error Alert</Alert>
                            <Alert variant="success">Success Alert</Alert>
                            <Alert variant="warning">Warning Alert</Alert>
                            <Alert variant="info">Info Alert</Alert>
                        `}
                    </Example.Code>
                </Example>
            </Section>
        </>
    );
};

export default AlertDocs;
