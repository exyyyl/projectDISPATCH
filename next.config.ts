import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/projectDISPATCH' : '';
module.exports = {  
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  };

export default nextConfig;
