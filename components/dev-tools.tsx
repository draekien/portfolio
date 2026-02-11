import { VercelToolbar } from "@vercel/toolbar/next";

export function DevTools() {
  const shouldInjectToolbar = process.env.NODE_ENV === "development";

  return <>{shouldInjectToolbar && <VercelToolbar />}</>;
}
