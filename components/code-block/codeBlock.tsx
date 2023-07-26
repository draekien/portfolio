/** @jsxImportSource theme-ui */
import { CodeBlock as WaystoneCodeBlock } from '@waystone/ui';

export interface CodeBlockProps {
  language?: string;
  wrapLongLines?: boolean;
  showLineNumbers?: boolean;
  children: string;
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
export const CodeBlock = ({
  language,
  wrapLongLines,
  showLineNumbers,
  children,
}: CodeBlockProps) => {
  return (
    <WaystoneCodeBlock
      language={language}
      wordWrap={wrapLongLines}
      hideLineNumbers={!showLineNumbers}>
      {children}
    </WaystoneCodeBlock>
  );
};

export default CodeBlock;
