import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/ui/navigation-menu';
import VisuallyHidden from '@/ui/visually-hidden';
import { cn } from '@/utils/cn';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { forwardRef } from 'react';

export default function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Code With Me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/code-with-me/c-sharp" title="C# .NET"></ListItem>
              <ListItem href="/code-with-me/typescript" title="Typescript"></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/get-in-touch" variant="ghost">
            Get In Touch
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="https://github.com/draekien/portfolio.git"
            variant="ghost"
            size="icon">
            <GitHubLogoIcon width={24} height={24} aria-hidden />
            <VisuallyHidden>Inspect the source code</VisuallyHidden>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef<
  React.ElementRef<typeof NavigationMenuLink>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuLink>
>(({ className, children, title, ...props }, ref) => (
  <li>
    <NavigationMenuLink
      ref={ref}
      className={cn(
        'block h-auto select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        className
      )}
      variant="ghost"
      {...props}>
      <div className="text-sm font-medium leading-none">{title}</div>
      {children && (
        <p className="text-muted-foreground line-clamp-2 text-sm font-normal leading-snug">
          {children}
        </p>
      )}
    </NavigationMenuLink>
  </li>
));
