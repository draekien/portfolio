import { Theme } from '@theme-ui/css';
import { Typography } from './theme.typography';
import { ThemeColors } from './theme.colors';
import { Layouts } from './theme.layouts';
import { Variants } from './theme.variants';

export const ProfileTheme: Theme = {
  breakpoints: ['40em', '56em', '64em'],
  colors: ThemeColors,
  ...Typography,
  ...Layouts,
  ...Variants,
};

export default ProfileTheme;
