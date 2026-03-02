import { config } from "@ministorex/config/tailwind.config";
import type { Config } from "tailwindcss";

const uiConfig: Config = {
  ...config,
  content: ["./src/**/*.{ts,tsx}"],
};

export default uiConfig;
