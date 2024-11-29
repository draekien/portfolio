import Image from 'next/image';
import Link from 'next/link';
import Nav from './nav';

export default function Header() {
  return (
    <header className="container sticky top-0 z-10 flex items-center justify-between py-4 md:py-8">
      <Link
        href="/"
        className="flex origin-top-left flex-col text-lg font-medium uppercase md:text-xl">
        William <br /> Pei
      </Link>
      <Nav />
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
