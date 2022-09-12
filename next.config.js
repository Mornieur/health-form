/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_API: process.env.REACT_API,
  },
};

module.exports = nextConfig;
