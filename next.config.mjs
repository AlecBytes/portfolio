/** @type {import('next').NextConfig} */
const nextConfig = {
    // Any other config here (e.g. reactStrictMode)
    reactStrictMode: true,
  
    async rewrites() {
      return [
        {
          source: '/chatbot',
          destination: `${process.env.CHATBOT_DOMAIN}/chatbot`,
        },
        {
          source: '/chatbot/:path*',
          destination: `${process.env.CHATBOT_DOMAIN}/chatbot/:path*`,
        },
      ];
    },
  };
  
  export default nextConfig;
  