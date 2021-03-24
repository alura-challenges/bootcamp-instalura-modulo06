const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@omariosouto/modulo-comum']);

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});

// module.exports = {
//     trailingSlash: true,
// }