import React from 'react';

import Button from './Button';
import Stack from '../../structures/stack/Stack';

export default {
  title: 'Button',
  component: Button
};

/**
 * TODO:
 * [ ] Button variants
 * [ ] Button in disabled state
 * [ ] Button in loading state
 */

export const Variants = () => {
  return (
    <Stack>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Danger</Button>
      <Button variant="ghost">Ghost</Button>
    </Stack>
  );
};
