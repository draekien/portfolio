'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { usePathname } from 'next/navigation';
import Link from './link';

export type NavLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export default function NavLink({
  children,
  href,
  className,
  size,
  variant,
  ...rest
}: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <NavigationMenu.Link asChild active={active}>
      <Link
        href={href}
        className="data-[active]:underline data-[active]:decoration-secondary data-[active]:underline-offset-8"
        size={size}
        variant={variant}
        disabled={active}
        {...rest}>
        {children}
      </Link>
    </NavigationMenu.Link>
  );
}
