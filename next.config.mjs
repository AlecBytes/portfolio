/** @type {import('next').NextConfig} */
const nextConfig = {
    // Any other config here (e.g. reactStrictMode)
    reactStrictMode: true,
  
    async rewrites() {
      return [
        // 1) Rewrite /chatbot -> chatbot's root /
        {
          source: '/chatbot',
          destination: `${process.env.NEXT_CHATBOT_DOMAIN}/`,  
        },

        // 2) Rewrite /chatbot/:path* -> chatbot's /:path*
        {
          source: '/chatbot/:path*',
          destination: `${process.env.NEXT_CHATBOT_DOMAIN}/:path*`,  
        },

        // 3) Serve chatbot’s static assets
        {
          source: '/chatbot-static/_next/:path*',
          destination: `${process.env.NEXT_CHATBOT_DOMAIN}/chatbot-static/_next/:path*`,
        },
        
      ];
    },
  };
  
  export default nextConfig;
  