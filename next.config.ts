import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    // Silence Deprecation The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.
    // https://sass-lang.com/d/legacy-js-api
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    // Allow images from https://dummyjson.com/icon/**
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyjson.com",
        port: "",
        pathname: "/icon/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/users",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
