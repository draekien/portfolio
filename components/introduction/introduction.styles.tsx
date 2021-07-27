import { ThemeUIStyleObject } from "@theme-ui/css";

export const introductionContainerCss: ThemeUIStyleObject = {
  flexFlow: "column",
  m: ["lg", "lg", "xl"],
  height: ["30rem", "30rem", "40rem"],
  justifyContent: "center",
};

export const headingTextCss: ThemeUIStyleObject = {
  variant: "text.heading",
  fontSize: ["h3", "h1", "hero"],
  lineHeight: "hero",
  pr: "xs",
};

export const headingTextMutedCss: ThemeUIStyleObject = {
  variant: "text.heading",
  fontSize: ["h3", "h1", "hero"],
  lineHeight: "hero",
  color: "muted",
};
