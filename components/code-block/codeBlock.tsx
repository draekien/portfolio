/** @jsxImportSource theme-ui */
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import * as styles from "./codeBlock.styles";

export interface CodeBlockProps {
  language?: string;
  wrapLongLines?: boolean;
  showLineNumbers?: boolean;
}

/**
 * Renders the provided children with the correctly styling for a code block
 * @param props - the {@link CodeBlockProps}
 * @param props.language - the coding language (for syntax highlighting)
 * @param [props.wrapLongLines] - should long lines wrap to the next line
 * @param [props.showLineNumbers] - should line numbers be shown on the left hand side
 * @param props.children - the code to render
 * @returns the code block
 */
export const CodeBlock: React.FC<CodeBlockProps> = ({ language, wrapLongLines, showLineNumbers, children }) => {
  return (
    <span sx={styles.codeBlockContainerCss}>
      <SyntaxHighlighter
        wrapLongLines={wrapLongLines}
        showLineNumbers={showLineNumbers}
        language={language}
        style={tomorrowNight}
        customStyle={{ backgroundColor: "inherit", fontFamily: "inherit", fontWeight: "inherit", lineHeight: "inherit" }}>
        {children}
      </SyntaxHighlighter>
    </span>
  );
};

export default CodeBlock;
