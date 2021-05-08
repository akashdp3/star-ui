import React from 'react';
import { Card } from 'react-star-ui';

import Example, { Section, Block } from '../components/Example';
import Table from '../components/Table';

const props = [
    {
        name: 'children',
        type: 'React Note',
        default: ''
    }
];

const CardDocs = () => {
    return (
        <>
            <div className="mt-2 mb-6">
                <p className="text-2xl font-semibold">Card</p>
            </div>
            <Section>
                <Example>
                    <Example.Preview>
                        <Card>
                            <div style={{ padding: '20px' }}>Hello World</div>
                        </Card>
                    </Example.Preview>
                    <Example.Code>
                        {`
                            <Card>
                                <div style={{ padding: '20px' }}>Hello World</div>
                            </Card>
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
        </>
    );
};

export default CardDocs;
