/** @type {import('next').NextConfig} */
const nextConfig = {    
    experimental: {
      serverActions: {
        allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
      },
    },
      images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'kargosha-mining.s3.ir-thr-at1.arvanstorage.ir',
          port: '',
         // pathname: '/**',
        },
      ],
    },
  
  }

export default nextConfig;
