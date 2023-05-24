/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HUBSPOT_CRM_TOKEN: process.env.HUBSPOT_CRM_TOKEN,
    DOMAIN: process.env.DOMAIN,
  },
};

module.exports = nextConfig;
