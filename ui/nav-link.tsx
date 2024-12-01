'use client';

import { cn } from '@/utils/cn';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { usePathname } from 'next/navigation';
import { forwardRef } from 'react';
import Link from './link';

export type NavLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

const NavLink = forwardRef<React.ElementRef<typeof NavigationMenu.Link>, NavLinkProps>(
  ({ className, children, href, size, variant, ...rest }, ref) => {
    const pathname = usePathname();
    const active = pathname === href;

    return (
      <NavigationMenu.Link ref={ref} asChild active={active}>
        <Link
          href={href}
          className={cn(
            'data-[active]:underline data-[active]:decoration-secondary data-[active]:underline-offset-8',
            className
          )}
          size={size}
          variant={variant}
          disabled={active}
          {...rest}>
          {children}
        </Link>
      </NavigationMenu.Link>
    );
  }
);

NavLink.displayName = NavigationMenu.Link.displayName;

export default NavLink;
