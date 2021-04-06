import { ThemeUIStyleObject } from "@theme-ui/css";

export const Variants: Record<string, ThemeUIStyleObject> = {
  text: {
    body: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    mono: {
      fontFamily: "monospace",
      fontWeight: "body",
      lineHeight: "body",
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    caps: {
      fontFamily: "body",
      fontWeight: "body",
      textTransform: "uppercase",
      letterSpacing: "0.1rem",
    },
  },
};
