import { ThemeUIStyleObject } from "@theme-ui/css";

export const mailDividerContainerCss: ThemeUIStyleObject = {
  mt: "sm",
  mb: "xl",
  mx: "xl",
  justifyContent: "flex-start",
  alignItems: "center",
};

export const mailLinkCss: ThemeUIStyleObject = {
  height: "1.5rem",
  width: "1.5rem",
  color: "primary",
  mr: "md",
  outline: "none",
  borderRadius: "sm",
  transition: "all 300ms",
  ":hover, :active, :focus": {
    color: "secondary",
  },
  ":focus": {
    outline: "0.125rem solid",
    outlineColor: "muted",
    outlineOffset: "0.25rem",
  },
};

export const mailIconCss: ThemeUIStyleObject = {
  width: "100%",
  height: "100%",
};

export const hrCss: ThemeUIStyleObject = {
  width: "3rem",
  height: 0,
  m: 0,
  borderTop: "0.25rem solid",
  borderColor: "primary",
};