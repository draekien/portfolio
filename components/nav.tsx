import NavLink from '@/ui/nav-link';
import VisuallyHidden from '@/ui/visually-hidden';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export default function Nav() {
  return (
    <NavigationMenu.Root className="relative flex justify-center">
      <NavigationMenu.List className="flex list-none justify-center gap-2">
        <NavigationMenu.Item>
          <NavLink href="/code-with-me" variant="ghost">
            Code With Me
          </NavLink>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavLink href="/get-in-touch" variant="ghost">
            Get In Touch
          </NavLink>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavLink
            href="https://github.com/draekien/portfolio.git"
            variant="ghost"
            size="icon">
            <GitHubLogoIcon width={24} height={24} aria-hidden />
            <VisuallyHidden>Inspect the source code</VisuallyHidden>
          </NavLink>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
