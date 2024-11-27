import Link from 'next/link';
import { forwardRef } from 'react';
import Button, { type ButtonProps } from './button';

export type LinkProps = React.ComponentPropsWithoutRef<typeof Link> &
  Pick<ButtonProps, 'variant' | 'size'>;

const CustomLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, variant, size, className, ...props }, ref) => {
    return (
      <Button variant={variant} size={size} className={className} asChild>
        <Link ref={ref} {...props}>
          {children}
        </Link>
      </Button>
    );
  }
);

CustomLink.displayName = 'Link';

export default CustomLink;
