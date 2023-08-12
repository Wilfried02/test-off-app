/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public", cacheOnFrontEndNav: true,
  reloadOnOnline: false, register: true,
  aggressiveFrontEndNavCaching: true,
});


const nextConfig = {}

module.exports = withPWA(nextConfig)
