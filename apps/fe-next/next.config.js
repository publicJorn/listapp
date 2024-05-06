const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = defaultConfig

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    nextConfig.images.remotePatterns = [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
      },
    ]
  }

  return nextConfig
}
