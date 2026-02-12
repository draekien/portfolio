import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { CommandMenu } from "./command-menu";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import { SrOnly } from "./ui/sr-only";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function LayoutHeader() {
  return (
    <header className="flex justify-between p-4">
      <Link
        href="/"
        className="text-xl md:text-2xl lg:text-3xl font-bold uppercase"
      >
        <span>William</span>
        <br />
        <span>Pei</span>
      </Link>
      <ButtonGroup>
        <ButtonGroup>
          <CommandMenu />
        </ButtonGroup>
        <ButtonGroup>
          <Tooltip>
            <TooltipTrigger render={<ThemeToggle variant="ghost" />} />
            <TooltipContent>Change theme</TooltipContent>
          </Tooltip>
        </ButtonGroup>
        <ButtonGroup>
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
      </ButtonGroup>
    </header>
  );
}
