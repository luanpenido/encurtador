import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/painel',
        destination: 'http://137.131.210.50:3000',
      },
      {
        source: '/painel/:path*',
        destination: 'http://137.131.210.50:3000/:path*',
      },
      {
        source: '/style.css',
        destination: 'http://137.131.210.50:3000/style.css',
      },
      {
        source: '/app.js',
        destination: 'http://137.131.210.50:3000/app.js',
      },
      {
        source: '/api/deals',
        destination: 'http://137.131.210.50:3000/api/deals',
      },
      {
        source: '/api/deals/:path*',
        destination: 'http://137.131.210.50:3000/api/deals/:path*',
      },
      {
        source: '/api/status',
        destination: 'http://137.131.210.50:3000/api/status',
      },
      {
        source: '/api/whatsapp/:path*',
        destination: 'http://137.131.210.50:3000/api/whatsapp/:path*',
      },
      {
        source: '/api/groups/:path*',
        destination: 'http://137.131.210.50:3000/api/groups/:path*',
      },
      {
        source: '/api/metrics/:path*',
        destination: 'http://137.131.210.50:3000/api/metrics/:path*',
      },
      {
        source: '/api/instagram/:path*',
        destination: 'http://137.131.210.50:3000/api/instagram/:path*',
      },
      {
        source: '/api/admin/:path*',
        destination: 'http://137.131.210.50:3000/api/admin/:path*',
      },
      {
        source: '/api/commands/:path*',
        destination: 'http://137.131.210.50:3000/api/commands/:path*',
      },
      {
        source: '/api/manual/:path*',
        destination: 'http://137.131.210.50:3000/api/manual/:path*',
      },
      {
        source: '/api/backups/:path*',
        destination: 'http://137.131.210.50:3000/api/backups/:path*',
      },
      {
        source: '/api/prices/:path*',
        destination: 'http://137.131.210.50:3000/api/prices/:path*',
      },
      {
        source: '/api/price-history/:path*',
        destination: 'http://137.131.210.50:3000/api/price-history/:path*',
      },
      {
        source: '/api/settings',
        destination: 'http://137.131.210.50:3000/api/settings',
      },
      {
        source: '/api/auth/:path*',
        destination: 'http://137.131.210.50:3000/api/auth/:path*',
      },
      {
        source: '/api/niches',
        destination: 'http://137.131.210.50:3000/api/niches',
      },
      {
        source: '/api/logs',
        destination: 'http://137.131.210.50:3000/api/logs',
      },
      {
        source: '/api/history/:path*',
        destination: 'http://137.131.210.50:3000/api/history/:path*',
      },
      {
        source: '/api/coupons/:path*',
        destination: 'http://137.131.210.50:3000/api/coupons/:path*',
      },
      {
        source: '/api/alerts/:path*',
        destination: 'http://137.131.210.50:3000/api/alerts/:path*',
      },
      {
        source: '/api/shortener/:path*',
        destination: 'http://137.131.210.50:3000/api/shortener/:path*',
      },
      {
        source: '/api/trigger-cycle',
        destination: 'http://137.131.210.50:3000/api/trigger-cycle',
      },
      {
        source: '/temp_media/:path*',
        destination: 'http://137.131.210.50:3000/temp_media/:path*',
      }
    ];
  },
};

export default nextConfig;
