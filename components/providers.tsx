import type { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      storageKey="portfolio-theme"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      {children}
    </ThemeProvider>
  );
}
