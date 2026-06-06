export function InstallCommand({ command }: { command: string }) {
  return (
    <div className="flex items-center gap-3 bg-muted rounded-md px-4 py-2.5 font-mono text-sm overflow-x-auto">
      <span className="text-secondary select-none shrink-0" aria-hidden="true">
        $
      </span>
      <span className="text-foreground whitespace-nowrap">{command}</span>
    </div>
  );
}
