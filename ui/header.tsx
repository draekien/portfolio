import Image from 'next/image';

export default function Header() {
  return (
    <header className="container sticky top-0 flex items-start place-self-center py-4 md:py-8">
      <div className="flex origin-top-left flex-col text-lg font-medium uppercase md:text-xl">
        <span className="leading-none">William</span>
        <span className="leading-none">Pei</span>
      </div>
      <Image
        src="logo.svg"
        alt="William Pei's logo"
        width={92}
        height={60}
        className="ml-auto aspect-square w-6 origin-top-right md:w-11"
      />
    </header>
  );
}
