import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuItemLink,
  NavigationMenuList,
} from '@/ui/navigation-menu';
import VisuallyHidden from '@/ui/visually-hidden';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export default function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex list-none justify-center gap-2">
        <NavigationMenuItem>
          <NavigationMenuItemLink href="/code-with-me" variant="ghost">
            Code With Me
          </NavigationMenuItemLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuItemLink href="/get-in-touch" variant="ghost">
            Get In Touch
          </NavigationMenuItemLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuItemLink
            href="https://github.com/draekien/portfolio.git"
            variant="ghost"
            size="icon">
            <GitHubLogoIcon width={24} height={24} aria-hidden />
            <VisuallyHidden>Inspect the source code</VisuallyHidden>
          </NavigationMenuItemLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
