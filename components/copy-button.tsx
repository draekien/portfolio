"use client";

import { CheckIcon, CopySimpleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CopyButton({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : "Copy code"}
      className={cn(
        "absolute top-2 right-2 p-1.5 rounded-md",
        "text-muted-foreground hover:text-foreground",
        "bg-transparent hover:bg-muted/60",
        "opacity-0 group-hover:opacity-100 focus-visible:opacity-100",
        "transition-all duration-150",
        "cursor-pointer",
        className,
      )}
    >
      {copied ? (
        <CheckIcon className="size-3.5" />
      ) : (
        <CopySimpleIcon className="size-3.5" />
      )}
    </button>
  );
}
