import React from 'react';
import { Skeleton } from 'react-star-ui';

import Example, { Section, Block } from '../components/Example';
import Table from '../components/Table';

const props = [
    {
        name: 'children',
        type: 'React Node',
        default: ''
    },
    {
        name: 'isLoading',
        type: 'boolean',
        default: 'true'
    },
    {
        name: 'height',
        type: 'string',
        default: 'inherit'
    },
    {
        name: 'width',
        type: 'string',
        default: '100%'
    },
    {
        name: 'borderRadius',
        type: 'string',
        default: '2px'
    },
    {
        name: 'speed',
        type: 'string',
        default: '1200ms'
    },
    {
        name: 'repeatCount',
        type: 'number',
        default: '1'
    },
    {
        name: 'config',
        type: 'Array[]',
        default: '[]'
    }
];

const SkeletonDocs = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    });

    return (
        <>
            <div className="mt-2 mb-6">
                <p className="text-2xl font-semibold">Skeleton</p>
            </div>
            <Section>
                <Example title="Sample Skeleton">
                    <Example.Preview>
                        <div style={{ height: '40px' }}>
                            <Skeleton />
                        </div>
                    </Example.Preview>
                    <Example.Code>{`<Skeleton />`}</Example.Code>
                </Example>
            </Section>
            <Section>
                <Block>
                    <h3 className="text-lg font-semibold">Props</h3>
                </Block>
                <Table tableRows={props} />
            </Section>
            <Section>
                <Example title="Behaviour">
                    <Example.Preview>
                        <div style={{ height: '40px' }}>
                            <Skeleton isLoading={loading}>
                                <p>This is a skeleton loader</p>
                            </Skeleton>
                        </div>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            const [loading, setLoading] = React.useState(true);

                            React.useEffect(() => {
                                setTimeout(() => {
                                    setLoading(false);
                                }, 500);
                            });

                            return (
                                <Skeleton isLoading={loading}>
                                    <p>This is a skeleton loader</p>
                                </Skeleton>
                            )
                        `}
                    </Example.Code>
                </Example>
            </Section>
        </>
    );
};

export default SkeletonDocs;
