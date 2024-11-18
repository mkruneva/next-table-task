import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    // Deprecation The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0. https://sass-lang.com/d/legacy-js-api
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
