interface ITextAppearance {
  variant: string;
  theme: { tokens: { colors: any } };
}

export const getTextColor = ({ variant, theme }: ITextAppearance) => {
  const {
    tokens: { colors }
  } = theme;

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
