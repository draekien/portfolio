import { ThemeUIStyleObject } from '@theme-ui/css';

export const mailDividerContainerCss: ThemeUIStyleObject = {
  mt: 'sm',
  mb: 'xl',
  mx: ['lg', 'lg', 'xl'],
  justifyContent: 'flex-start',
  alignItems: 'center',
};

export const iconLinkCss: ThemeUIStyleObject = {
  display: 'inline-block',
  height: '1.5rem',
  width: '1.5rem',
  color: 'primary',
  mr: 'md',
  outline: 'none',
  borderRadius: 'sm',
  cursor: 'pointer',
  verticalAlign: 'middle',
  transition: 'all 300ms',
  ':hover, :active, :focus': {
    color: 'secondary',
  },
  ':focus': {
    outline: '0.125rem solid',
    outlineColor: 'muted',
    outlineOffset: '0.25rem',
  },
};

export const iconCss: ThemeUIStyleObject = {
  width: '100%',
  height: '100%',
};

export const hrCss: ThemeUIStyleObject = {
  width: '3rem',
  height: 0,
  m: 0,
  borderTop: '0.25rem solid',
  borderColor: 'primary',
};
