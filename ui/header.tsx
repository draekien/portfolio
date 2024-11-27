import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from './link';
import VisuallyHidden from './visually-hidden';

export default function Header() {
  return (
    <header className="container sticky top-0 flex items-center justify-between py-4 md:py-8">
      <div className="flex origin-top-left flex-col text-lg font-medium uppercase md:text-xl">
        <span className="leading-none">William</span>
        <span className="leading-none">Pei</span>
      </div>
      <nav className="basis-1/3">
        <ul className="flex items-center justify-end gap-4">
          <li>
            <Link href="/" variant="ghost">
              Code With Me
            </Link>
          </li>
          <li>
            <Link href="/" variant="ghost">
              Get In Touch
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/draekien/portfolio.git"
              variant="ghost"
              size="icon">
              <GitHubLogoIcon width={24} height={24} />
              <VisuallyHidden>Inspect the source code</VisuallyHidden>
            </Link>
          </li>
        </ul>
      </nav>
      <Image
        src="logo.svg"
        alt="William Pei's logo"
        width={92}
        height={60}
        className="aspect-square w-6 origin-top-right md:w-11"
      />
    </header>
  );
}
