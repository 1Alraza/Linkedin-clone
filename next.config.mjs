/** @type {import('next').NextConfig} */
const nextConfig = {
  serverActions: {
    bodySizeLimit: '5mb', // or whatever limit you want
  },
};

export default nextConfig;