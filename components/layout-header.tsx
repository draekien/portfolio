import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import { SrOnly } from "./ui/sr-only";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function LayoutHeader() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link
        href="/"
        className="text-xl md:text-2xl lg:text-3xl font-bold uppercase"
      >
        <span>William</span>
        <br />
        <span>Pei</span>
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="/articles"
          className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
        >
          articles
        </Link>
        <Link
          href="/colophon"
          className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
        >
          colophon
        </Link>
        <ButtonGroup>
          <Tooltip>
            <TooltipTrigger render={<ThemeToggle variant="ghost" />} />
            <TooltipContent>Change theme</TooltipContent>
          </Tooltip>
          <Tooltip>
            <a
              href="https://github.com/draekien/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TooltipTrigger render={<Button variant="ghost" />}>
                <GithubLogoIcon />
                <SrOnly>View Repository</SrOnly>
              </TooltipTrigger>
            </a>
            <TooltipContent>View repository on GitHub</TooltipContent>
          </Tooltip>
        </ButtonGroup>
      </div>
    </header>
  );
}
