import { VARIANTS } from '../../../tokens/constants';

interface IBadge {
  variant: string;
  theme: { colors: any };
}

export const getAppearance = ({ variant, theme }: IBadge) => {
  const {
    tokens: { colors }
  } = theme;
  let appearance = {
    color: '',
    backgroundColor: ''
  };

  switch (variant) {
    case VARIANTS.PRIMARY:
      appearance.color = colors.white.base;
      appearance.backgroundColor = colors.primary.base;
      break;

    case VARIANTS.SECONDARY:
      appearance.color = colors.secondary.dark;
      appearance.backgroundColor = colors.secondary.lighter;
      break;

    case VARIANTS.SUCCESS:
      appearance.color = colors.white.base;
      appearance.backgroundColor = colors.success.base;
      break;

    case VARIANTS.DANGER:
      appearance.color = colors.white.base;
      appearance.backgroundColor = colors.danger.base;
      break;

    case VARIANTS.WARNING:
      appearance.color = colors.white.base;
      appearance.backgroundColor = colors.warning.base;
      break;

    default:
      appearance.color = colors.secondary.dark;
      appearance.backgroundColor = colors.secondary.lighter;
      break;
  }

  return appearance;
};
