interface ITextAppearance {
  variant: string;
  theme: { colors: any };
}

export const getTextColor = ({ variant, theme }: ITextAppearance) => {
  const { colors } = theme;

  switch (variant) {
    case 'primary':
      return colors.primary.base;

    case 'secondary':
      return colors.secondary.base;

    case 'success':
      return colors.success.base;

    case 'danger':
      return colors.danger.base;

    case 'warning':
      return colors.danger.base;

    default:
      return colors.secondary.dark;
  }
};
