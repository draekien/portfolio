import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type InternalButtonLinkProps = {
  internal: true;
  external?: false;
  link: ComponentProps<typeof Link>;
} & Omit<ComponentProps<typeof Button>, "render" | "nativeButton">;

type ExternalButtonLinkProps = {
  external: true;
  internal?: false;
  link: ComponentProps<"a">;
} & Omit<ComponentProps<typeof Button>, "render" | "nativeButton">;

type ButtonLinkProps = InternalButtonLinkProps | ExternalButtonLinkProps;

export function ButtonLink(props: ButtonLinkProps) {
  if (props.internal) {
    const {
      internal: _,
      link,
      children,
      className,
      variant = "link",
      ...buttonProps
    } = props;

    return (
      <Button
        variant={variant}
        className={cn("p-0 h-fit", className)}
        {...buttonProps}
        nativeButton={false}
        render={<Link {...link}>{children}</Link>}
      />
    );
  }

  const {
    external: _,
    link,
    children,
    className,
    variant = "link",
    ...buttonProps
  } = props;

  return (
    <Button
      variant={variant}
      className={cn("p-0 h-fit", className)}
      {...buttonProps}
      nativeButton={false}
      render={<a {...link}>{children}</a>}
    />
  );
}
