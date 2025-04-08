/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This setting helps with some hydration issues
  experimental: {
    // Using the new React 18 streaming SSR for better hydration
    serverComponents: true,
  }
}

module.exports = nextConfig
