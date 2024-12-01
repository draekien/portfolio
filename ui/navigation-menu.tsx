import { cn } from '@/utils/cn';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { forwardRef } from 'react';
import { buttonVariants } from './button';
import NavLink, { type NavLinkProps } from './nav-link';

const NavigationMenu = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ children, className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Root
      {...props}
      ref={ref}
      className={cn('relative flex justify-center', className)}>
      {children}
    </NavigationMenuPrimitive.Root>
  );
});

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ children, className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.List
      {...props}
      ref={ref}
      className={cn('group flex list-none items-center justify-center gap-2', className)}>
      {children}
    </NavigationMenuPrimitive.List>
  );
});

NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuTrigger = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ children, className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Trigger
      {...props}
      ref={ref}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'group',
        'inline-flex items-center justify-center',
        'data-[active]:bg-primary/50 data-[state=open]:bg-primary/50',
        className
      )}>
      {children}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden={true}
      />
    </NavigationMenuPrimitive.Trigger>
  );
});

NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ children, className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Content
      {...props}
      ref={ref}
      className={cn(
        'left-0 top-0 w-full md:absolute md:w-auto',
        'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52',
        className
      )}
    />
  );
});

NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuViewport = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ children, className, ...props }, ref) => {
  return (
    <div className="absolute left-0 top-full flex justify-center">
      <NavigationMenuPrimitive.Viewport
        {...props}
        ref={ref}
        className={cn(
          'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border',
          'bg-popover text-popover-foreground shadow-lg',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
          className
        )}
      />
    </div>
  );
});

NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ children, className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Indicator
      {...props}
      ref={ref}
      className={cn(
        'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
        className
      )}>
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
});

NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

const NavigationMenuItem = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ children, className, ...props }, ref) => {
  return <NavigationMenuPrimitive.Item {...props} ref={ref} className={cn(className)} />;
});

NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName;

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavLink as NavigationMenuItemLink,
  NavLinkProps as NavigationMenuItemLinkProps,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
};
