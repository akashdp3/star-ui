import { IColor } from '../../tokens/types';

interface IAlert {
  variant: string;
  theme: {
    colors: { [key: string]: IColor };
    spaces: { [key: number]: string };
    fontSizes: { [key: number]: string };
  };
}

export const getAppearance = ({ variant, theme }: IAlert) => {
  const { colors } = theme;

  switch (variant) {
    case 'warning':
      return {
        backgroundColor: colors.warning.lighter,
        color: colors.warning.dark
      };
    case 'success':
      return {
        backgroundColor: colors.success.lighter,
        color: colors.success.dark
      };
    case 'info':
      return {
        backgroundColor: colors.primary.lighter,
        color: colors.primary.dark
      };
    case 'error':
    default:
      return {
        backgroundColor: colors.danger.lighter,
        color: colors.danger.dark
      };
  }
};
