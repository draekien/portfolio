"use client";

import {
  ArrowUpRightIcon,
  CaretDownIcon,
  CheckIcon,
  CopySimpleIcon,
  RssSimpleIcon,
} from "@phosphor-icons/react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

const FEED_URL = "https://www.wpei.me/rss.xml";

export function ArticleFeedSubscribe() {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const panelId = useId();

  const copy = async () => {
    await navigator.clipboard.writeText(FEED_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-12">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <div className="flex items-center gap-2 shrink-0">
          <RssSimpleIcon className="size-4 text-primary" aria-hidden="true" />
          <span className="font-mono text-sm text-foreground">RSS</span>
        </div>

        <div className="flex items-center gap-3 bg-muted rounded-md px-4 py-2.5 font-mono text-sm min-w-0 max-w-full">
          <span className="text-foreground truncate min-w-0">{FEED_URL}</span>
          <button
            type="button"
            onClick={copy}
            aria-label={copied ? "Copied" : "Copy feed URL"}
            className="shrink-0 cursor-pointer text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            {copied ? (
              <CheckIcon className="size-4 text-primary" aria-hidden="true" />
            ) : (
              <CopySimpleIcon className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="mt-3 flex items-center gap-1.5 cursor-pointer font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
      >
        how to subscribe
        <CaretDownIcon
          className={cn(
            "size-4 transition-transform duration-200 motion-reduce:transition-none",
            expanded && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none",
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div id={panelId} inert={!expanded} className="overflow-hidden">
          <div className="pt-4 space-y-3 text-sm text-muted-foreground max-w-prose">
            <ol className="space-y-1.5 list-decimal list-inside marker:font-mono marker:text-secondary">
              <li>Copy the feed URL above.</li>
              <li>Paste it into your RSS reader.</li>
            </ol>
            <p>
              Readers like NetNewsWire, Feedly, and Reeder check the feed and
              surface new articles as they're published.
            </p>
            <a
              href="https://aboutfeeds.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              New to RSS? Learn how it works
              <ArrowUpRightIcon className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
