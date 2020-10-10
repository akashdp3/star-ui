import React from 'react';

import Input from './Input';
import { Stack } from '../..';

export default {
  title: 'Input',
  component: Input
};

export const Default = () => {
  return (
    <Stack style={{ width: '98%' }}>
      <Input placeholder="Sample Input" />
    </Stack>
  );
};

export const Variants = () => {
  return (
    <Stack direction="vertical" style={{ width: '98%' }}>
      <Input placeholder="Normal Input" />
      <Input placeholder="Disabled Input" disabled />
      <Input placeholder="Invalid Input" isInvalid />
    </Stack>
  );
};
