/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HUBSPOT_CRM_TOKEN: process.env.HUBSPOT_CRM_TOKEN,
  },
};

module.exports = nextConfig;
