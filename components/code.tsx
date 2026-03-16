import { cn } from "@/lib/utils";

export function Code({ className, ...props }: React.ComponentProps<"code">) {
  return (
    <code
      className={cn(
        "font-mono text-sm bg-muted px-1 py-0.5 rounded-sm",
        className,
      )}
      {...props}
    />
  );
}
