import { BrandMark } from "@/components/brand-mark";
import { CodeBlock, type CodeBlockProps } from "@/components/code-block";

export function LabeledCodeBlock({
  label,
  language,
  code,
}: {
  label: string;
  language: CodeBlockProps["language"];
  code: string;
}) {
  return (
    <div>
      <p className="font-mono text-sm text-muted-foreground mb-3">
        <BrandMark className="text-primary mr-1" />
        {label}
      </p>
      <CodeBlock language={language} code={code} />
    </div>
  );
}
