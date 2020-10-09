import React from 'react';

import TextArea from './TextArea';
import { Stack } from '../..';

export default {
  title: 'TextArea',
  component: TextArea
};

export const Default = () => {
  return (
    <Stack>
      <TextArea placeholder="Sample TextArea" />
    </Stack>
  );
};

export const Variants = () => {
  return (
    <Stack direction="vertical">
      <TextArea placeholder="Normal TextArea" />
      <TextArea placeholder="Disabled TextArea" disabled />
      <TextArea placeholder="Invalid TextArea" isInvalid />
    </Stack>
  );
};
