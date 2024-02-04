import { ThemeUIStyleObject } from '@theme-ui/css';

export const introductionContainerCss: ThemeUIStyleObject = {
  flexFlow: 'column',
  m: ['lg', 'lg', 'xl'],
  height: '75vmin',
  justifyContent: 'center',
};

export const headingTextCss: ThemeUIStyleObject = {
  variant: 'text.heading',
  fontSize: '6vmin',
  pr: 'sm',
};

export const headingTextMutedCss: ThemeUIStyleObject = {
  variant: 'text.heading',
  fontSize: '6vmin',
  color: 'muted',
};
