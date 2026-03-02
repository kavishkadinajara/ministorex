import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@ministorex/ui", "@ministorex/database"],
};

export default nextConfig;
