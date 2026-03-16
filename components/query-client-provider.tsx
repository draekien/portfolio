"use client";

import { QueryClientProvider as TanstackQueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { PropsWithChildren } from "react";
import { getQueryClient } from "@/lib/query-client";

export function QueryClientProvider({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </TanstackQueryClientProvider>
  );
}
