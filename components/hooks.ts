import { useEffect, useState } from 'react';

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const options: AddEventListenerOptions = {
      passive: true,
    };
    const handleScroll = (ev: Event) => {
      setScrollY(Math.round(window.scrollY));
    };
    document.addEventListener('scroll', handleScroll, options);

    return () => document.removeEventListener('scroll', handleScroll, options);
  }, [setScrollY]);

  return scrollY;
}
