const withTM = require('next-transpile-modules')([
  '@dezignerblake/utils',
  '@dezignerblake/mask',
  '@dezignerblake/popover',
  '@dezignerblake/tour',
])

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['cdn.dribbble.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
})

// module.exports = {
//   reactStrictMode: true,
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// }
