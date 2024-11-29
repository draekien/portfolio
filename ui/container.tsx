import { cn } from '@/utils/cn';
import { forwardRef } from 'react';

export type ContainerProps = React.ComponentPropsWithoutRef<'div'>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...rest }, ref) => (
    <div ref={ref} {...rest} className={cn('container py-4 md:py-8', className)}>
      {children}
    </div>
  )
);

export default Container;
