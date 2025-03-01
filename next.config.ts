import type { NextConfig } from "next";
import path from "path";

const sassOptions = {
  additionalData: `
    @use "media.scss" as *;
    @use "fonts.scss" as *;
  `,
};

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, "src/app/styles")],
    ...sassOptions,
  },
};

export default nextConfig;
