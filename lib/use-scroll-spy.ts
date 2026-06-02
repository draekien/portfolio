import { useEffect, useState } from "react";

/**
 * Tracks which section is active while scrolling, matching the model used by
 * the Tailwind CSS docs: the active section is the last one whose top has
 * scrolled past the vertical midpoint of the viewport, with a bottom-of-page
 * guard that snaps the final section active once you reach the end. This keeps
 * trailing sections from being skipped, which a top-anchored reading line does.
 *
 * `ids` must be a stable reference (module constant or memoized) since it is an
 * effect dependency.
 */
export function useScrollSpy<T extends string>(
  ids: readonly T[],
): T | undefined {
  const [activeId, setActiveId] = useState<T | undefined>(ids[0]);

  useEffect(() => {
    if (ids.length === 0) return;

    function getActiveId(): T | undefined {
      // Near the bottom of the page → the last section wins regardless of
      // where its heading sits, so short trailing sections still activate.
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight - scrollBottom < 50) {
        return ids[ids.length - 1];
      }

      // Otherwise: the last section whose top has crossed the viewport midpoint.
      const line = window.innerHeight / 2;
      for (let i = ids.length - 1; i >= 0; i--) {
        const id = ids[i];
        if (id === undefined) continue;
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) {
          return id;
        }
      }

      return ids[0];
    }

    function onScroll() {
      setActiveId(getActiveId());
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return activeId;
}
