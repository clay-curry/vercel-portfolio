module.exports = {
  experimental: {
    serverActions: {
      bodySizeLimit: 1000,
    }
  },


   async redirects() {

    return [
       // Basic redirect
      {
        source: '/github',
        destination: 'https://github.com/clay-curry/',
        permanent: false
      },
      // Wildcard path matching
      {
        source: '/twitter',
        destination: 'https://x.com/claycurry_',
        permanent: false
      },
    ]
   }
  }