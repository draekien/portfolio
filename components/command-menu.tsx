"use client";

import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
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
import { Kbd } from "./ui/kbd";
import { SrOnly } from "./ui/sr-only";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();

  useEffect(() => {
    const down = (e: {
      key: string;
      metaKey: boolean;
      ctrlKey: boolean;
      preventDefault: () => void;
    }) => {
      const isMeta = e.metaKey || e.ctrlKey;

      if (e.key === "k" && isMeta) {
        e.preventDefault();
        setOpen((open) => !open);
        return;
      }

      if (e.key === "m" && isMeta) {
        e.preventDefault();
        router.push("/#waystone-monads");
        return;
      }

      if (e.key === "l" && isMeta) {
        e.preventDefault();
        router.push("/#waystone-wide-log-events");
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [router]);

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
              <CommandItem onSelect={() => router.push("/#waystone-monads")}>
                <span>Waystone.Monads</span>
                <CommandShortcut>⌘M</CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => router.push("/#waystone-wide-log-events")}
              >
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
