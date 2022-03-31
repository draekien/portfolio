import { ThemeUIStyleObject } from 'theme-ui';
import { HeadingVariant } from './heading';

export const headingCss = (
  variant: HeadingVariant,
  fontSize?: HeadingVariant
): ThemeUIStyleObject => {
  const css: ThemeUIStyleObject = {
    variant: 'text.heading',
    fontSize: fontSize || variant,
    m: 0,
  };

  return css;
};
