const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  GHOST: 'ghost'
};

export const getAppearance = (variant, theme) => {
  const { colors } = theme;
  switch (variant) {
    case VARIANTS.PRIMARY:
      return {
        color: colors.white.base,
        backgroundColor: colors.primary.base,
        borderColor: colors.primary.base
      };

    case VARIANTS.SECONDARY:
      return {
        color: colors.primary.base,
        backgroundColor: colors.white.base,
        borderColor: colors.primary.base
      };

    case VARIANTS.SUCCESS:
      return {
        color: colors.white.base,
        backgroundColor: colors.success.base,
        borderColor: colors.success.base
      };

    case VARIANTS.DANGER:
      return {
        color: colors.white.base,
        backgroundColor: colors.danger.base,
        borderColor: colors.danger.base
      };

    case VARIANTS.WARNING:
      return {
        color: colors.white.base,
        backgroundColor: colors.warning.base,
        borderColor: colors.warning.base
      };

    case VARIANTS.GHOST:
      return {
        color: colors.primary.base,
        backgroundColor: 'transparent',
        borderColor: 'transparent'
      };

    default:
      return {
        color: colors.primary.base,
        backgroundColor: colors.white.base,
        borderColor: colors.primary.base
      };
  }
};
