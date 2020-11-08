import { VARIANTS } from '../../tokens/constants';

interface IBadge {
  variant: string;
  theme: { colors: any };
}

export const getAppearance = ({ variant, theme }: IBadge) => {
  const { colors } = theme;
  let appearance = {
    color: '',
    bgColor: ''
  };

  switch (variant) {
    case VARIANTS.PRIMARY:
      appearance.color = colors.white.base;
      appearance.bgColor = colors.primary.base;
      break;

    case VARIANTS.SECONDARY:
      appearance.color = colors.secondary.dark;
      appearance.bgColor = colors.secondary.lighter;
      break;

    case VARIANTS.SUCCESS:
      appearance.color = colors.white.base;
      appearance.bgColor = colors.success.base;
      break;

    case VARIANTS.DANGER:
      appearance.color = colors.white.base;
      appearance.bgColor = colors.danger.base;
      break;

    default:
      appearance.color = colors.secondary.dark;
      appearance.bgColor = colors.secondary.lighter;
      break;
  }

  return appearance;
};
