/** @type {import('next').NextConfig} */
const nextConfig = {
  // 允许所有host，方便Codespaces访问
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
}

module.exports = nextConfig
