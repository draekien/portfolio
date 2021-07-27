import { ThemeUIStyleObject } from "theme-ui";
import { HeadingVariant } from "./heading";

export const headingCss = (variant: HeadingVariant): ThemeUIStyleObject => {
  const css: ThemeUIStyleObject = {
    variant: "text.heading",
    fontSize: variant,
  };

  return css;
};
