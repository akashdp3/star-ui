import Alert from '../pages/Alert';
import Badge from '../pages/Badge';
import Button from '../pages/Button';
import Card from '../pages/Card';
import CheckBox from '../pages/Checkbox';
import Grid from '../pages/Grid';
import Heading from '../pages/Heading';
import Input from '../pages/Input';
import Radio from '../pages/Radio';
import Skeleton from '../pages/Skeleton';
import Spinner from '../pages/Spinner';
import Stack from '../pages/Stack';
import Text from '../pages/Text';
import TextArea from '../pages/TextArea';

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
        route: '/checkbox',
        page: CheckBox
      },
      {
        name: 'Heading',
        route: '/heading',
        page: Heading
      },
      {
        name: 'Input',
        route: '/input',
        page: Input
      },
      {
        name: 'Radio',
        route: '/route',
        page: Radio
      },
      {
        name: 'Skeleton',
        route: '/skeleton',
        page: Skeleton
      },
      {
        name: 'Spinner',
        route: '/spinner',
        page: Spinner
      },
      {
        name: 'Text',
        route: '/text',
        page: Text
      },
      {
        name: 'TextArea',
        route: '/textarea',
        page: TextArea
      }
    ]
  },
  {
    name: 'Molecules',
    components: [
      {
        name: 'Card',
        route: '/card',
        page: Card
      }
    ]
  },
  {
    name: 'Structures',
    components: [
      {
        name: 'Grid',
        route: '/grid',
        page: Grid
      },
      {
        name: 'Stack',
        route: '/stack',
        page: Stack
      }
    ]
  }
];

export { documentations };
