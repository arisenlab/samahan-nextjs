const { backendURL } = require('./utils/constants');

module.exports = {
  async rewrites() {
    return [
      { source: '/wp-admin/:path*', destination: `${backendURL}/wp-admin/:path*` }
    ]
  }
}