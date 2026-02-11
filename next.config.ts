import createWithVercelToolbar from "@vercel/toolbar/plugins/next";
import type { NextConfig } from "next";

const withVercelToolbar = createWithVercelToolbar();

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
};

export default withVercelToolbar(nextConfig);
