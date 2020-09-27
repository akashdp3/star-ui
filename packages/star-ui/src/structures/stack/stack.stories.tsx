import React from 'react';

import Stack from './Stack';

export default {
  title: 'Stack',
  component: Stack
};

export const Default = () => {
  return (
    <Stack>
      <p>Element A</p>
      <p>Element B</p>
      <p>Element C</p>
    </Stack>
  );
};
