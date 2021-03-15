import { ThemeUIStyleObject } from "@theme-ui/css";

export const Variants: Record<string, ThemeUIStyleObject> = {
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1rem",
    },
  },
};
