/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Module parse failed: Unexpected token (17:12)
  // You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
  // |
  // | import * as runtime from '../runtime';
  // > import type {
  // |   CreateUserRequest,
  // |   UpdateUserRequest,
  // というエラーを解消するために必要
  webpack: (config, { isServer, defaultLoaders }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
