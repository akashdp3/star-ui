import Alert from '../pages/Alert';
import Badge from '../pages/Badge';
import Button from '../pages/Button';

const documentations = [
  {
    name: 'Atoms',
    components: [
      {
        name: 'Alert',
        route: '/alert',
        page: Alert
      },
      {
        name: 'Badge',
        route: '/badge',
        page: Badge
      },
      {
        name: 'Button',
        route: '/button',
        page: Button
      },
      {
        name: 'CheckBox',
        route: '/checkbox'
      },
      {
        name: 'Heading',
        route: '/heading'
      },
      {
        name: 'Input',
        route: '/input'
      },
      {
        name: 'Radio',
        route: '/route'
      },
      {
        name: 'Skeleton',
        route: '/skeleton'
      },
      {
        name: 'Spinner',
        route: '/spinner'
      },
      {
        name: 'Text',
        route: '/text'
      },
      {
        name: 'TextArea',
        route: '/textarea'
      }
    ]
  },
  {
    name: 'Molecules',
    components: [
      {
        name: 'Card',
        route: '/card'
      }
    ]
  },
  {
    name: 'Structures',
    components: [
      {
        name: 'Grid',
        route: '/grid'
      },
      {
        name: 'Stack',
        route: '/stack'
      }
    ]
  }
];

export { documentations };
