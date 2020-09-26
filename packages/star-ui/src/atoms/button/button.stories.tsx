import React from 'react';

import Button from './Button';
import Stack from '../../structures/stack/Stack';

export default {
  title: 'Button',
  component: Button
};

/**
 * TODO:
 * Stories:
 * [x] Button variants
 * [x] Button in disabled state
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

export const Disabled = () => (
  <Stack>
    <Button variant="primary" isDisabled>
      Primary
    </Button>
    <Button variant="secondary" isDisabled>
      Secondary
    </Button>
    <Button variant="success" isDisabled>
      Success
    </Button>
    <Button variant="danger" isDisabled>
      Danger
    </Button>
    <Button variant="warning" isDisabled>
      Warning
    </Button>
    <Button variant="ghost" isDisabled>
      Ghost
    </Button>
  </Stack>
);

export const Loading = () => (
  <Stack>
    <Button variant="primary" isLoading>
      Primary
    </Button>
    <Button variant="secondary" isLoading>
      Secondary
    </Button>
    <Button variant="success" isLoading>
      Success
    </Button>
    <Button variant="danger" isLoading>
      Danger
    </Button>
    <Button variant="warning" isLoading>
      Warning
    </Button>
    <Button variant="ghost" isLoading>
      Ghost
    </Button>
  </Stack>
);
