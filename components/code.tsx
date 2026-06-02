import { cn } from "@/lib/utils";

export function Code({ className, ...props }: React.ComponentProps<"code">) {
  return (
    <code
      className={cn(
        "font-mono text-[0.85em] bg-muted px-[0.4em] py-[0.1em] rounded-sm",
        className,
      )}
      {...props}
    />
  );
}
