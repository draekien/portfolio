/** @jsxImportSource theme-ui */
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import * as styles from "./codeBlock.styles";

export interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  wrapLongLines?: boolean;
  showLineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, wrapLongLines, showLineNumbers, children }) => {
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
