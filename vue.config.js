// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/utilities/_variables.scss')]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@base', path.resolve(__dirname, 'src/components/base'));
    config.resolve.alias.set('@layout', path.resolve(__dirname, 'src/components/layout'));
  }
};
