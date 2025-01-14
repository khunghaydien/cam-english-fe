import createNextIntlPlugin from 'next-intl/plugin'
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || '';
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
        ],
    },
  async rewrites() {
    return [
      {
        source: '/graphql/:path*',
        destination: `${baseURL}/graphql/:path*`,
      }
    ];
  },
};

export default withNextIntl(nextConfig);