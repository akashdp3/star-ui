import React from 'react';

import Badge from './Badge';
import Stack from '../../structures/stack/Stack';

export default {
  title: 'Badge',
  component: Badge
};

export const Default = () => {
  return <Badge>Default</Badge>;
};

export const Custom = () => {
  return (
    <Badge backgroundColor="lightGreen" color="green">
      Custom Badge
    </Badge>
  );
};
