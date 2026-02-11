"use client";

import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/lib/hooks";
import { Button } from "./ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "./ui/command";
import { Kbd, KbdGroup } from "./ui/kbd";
import { SrOnly } from "./ui/sr-only";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const down = (e: {
      key: string;
      metaKey: boolean;
      ctrlKey: boolean;
      preventDefault: () => void;
    }) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button variant="ghost" onClick={() => setOpen((open) => !open)}>
        <ListIcon />
        <SrOnly>Menu</SrOnly>
        {!isMobile && (
          <Kbd data-icon="inline-end" className="tracking-widest text-base">
            ⌘K
          </Kbd>
        )}
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Projects">
              <CommandItem>
                <span>Waystone.Monads</span>
                <CommandShortcut>⌘M</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Waystone.WideLogEvents</span>
                <CommandShortcut>⌘L</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
