'use client';

import Image from 'next/image';
import { useScrollPosition } from './hooks';
import { cn } from './utils';

export default function HeroHeader() {
  const scrollY = useScrollPosition();
  const scale = scrollY < 200;

  return (
    <header className={cn('sticky top-0 flex items-start p-4 md:p-8')}>
      <div
        className={cn(
          'flex origin-top-left flex-col text-lg font-medium uppercase transition-transform duration-300 md:text-xl',
          scale
            ? 'translate-y-44 scale-[2.5] md:translate-x-10 md:translate-y-96 md:scale-[5]'
            : ''
        )}>
        <span className="leading-none">William</span>
        <span className="leading-none">Pei</span>
      </div>
      <Image
        src="logo.svg"
        alt="William Pei's logo"
        width={92}
        height={60}
        className={cn(
          'ml-auto aspect-square w-6 origin-top-right transition-transform duration-300 md:w-11',
          scale
            ? 'translate-y-44 scale-[2] md:-translate-x-10 md:translate-y-96 md:scale-[2.5]'
            : ''
        )}
      />
    </header>
  );
}
