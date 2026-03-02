import { config } from "@ministorex/config/tailwind.config";
import type { Config } from "tailwindcss";

const appConfig: Config = {
  ...config,
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
};

export default appConfig;
