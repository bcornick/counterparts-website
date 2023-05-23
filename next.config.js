/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HUBSPOT_TOKEN: process.env.HUBSPOT_TOKEN,
  },
};

module.exports = nextConfig;
