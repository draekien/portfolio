import { cn } from '@/utils/cn';
import NextLink from 'next/link';
import { forwardRef } from 'react';
import { buttonVariants, type ButtonProps } from './button';

export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink> &
  Pick<ButtonProps, 'variant' | 'size' | 'disabled'>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, variant, size, className, disabled, ...props }, ref) => {
    return (
      <NextLink
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, className }),
          'aria-disabled:pointer-events-none'
        )}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        {...props}>
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;
