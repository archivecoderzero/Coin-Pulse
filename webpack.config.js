module.exports = {
  entry: "./client/src/index.js",
  output: {
    filename: "./client/public/js/bundle.js"
  },
  module: {
    loaders: [{
      exclude: /(node_modules|server.js)/,
      loader: 'babel',
      query:
      {
          presets:['es2015', 'react']
      }
    }]
  },
  node: {
    fs: 'empty',
    tls: 'empty'
  }
};