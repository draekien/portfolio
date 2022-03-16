import { ThemeUIStyleObject } from '@theme-ui/css';

export const showcaseDescriptionContainerCss: ThemeUIStyleObject = {
  flexFlow: 'column',
  width: '30rem',
  m: [0, 0, 'xl'],
};

export const showcaseHeadingContainerCss: ThemeUIStyleObject = {
  mb: 'lg',
};

export const showcaseHeadingPreCss: ThemeUIStyleObject = {
  variant: 'text.heading',
  color: 'secondary',
  mr: 'sm',
  width: '1.2em',
};

export const showcaseHeadingLinkCss: ThemeUIStyleObject = {
  textDecoration: 'none',
  variant: 'text.heading',
  color: 'primary',
  transition: 'all 300ms',
  width: 'max-content',
  ':hover, :active, :focus': {
    color: 's-000',
  },
  ':focus': {
    outline: '0.125rem solid',
    outlineColor: 'muted',
    outlineOffset: '0.25rem',
  },
};

export const showcaseHeadingLinkIconCss: ThemeUIStyleObject = {
  width: '1rem',
  height: '1rem',
  verticalAlign: 'top',
  mt: '0.2em',
};

export const showcaseLabelsContainerCss: ThemeUIStyleObject = {
  mb: 'xl',
  flexFlow: 'row nowrap',
};

export const labelKeyContainerCss: ThemeUIStyleObject = {
  flexFlow: 'column',
  mr: 'md',
};

export const labelKeyCss: ThemeUIStyleObject = {
  variant: 'text.mono',
  color: 'secondary',
};

export const labelValueContainerCss: ThemeUIStyleObject = {
  flexFlow: 'column',
};

export const labelValueCss: ThemeUIStyleObject = {
  variant: 'text.body',
  width: 'fit-content',
};

export const showcaseChildrenContainerCss: ThemeUIStyleObject = {
  flexFlow: 'column',
  mt: 'lg',
};
