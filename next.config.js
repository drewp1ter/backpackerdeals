const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
const typescript = require('@zeit/next-typescript');
const images = require('next-images');
const withPlugins = require('next-compose-plugins');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const nextConfig = {
  webpack(config, options) {
    const { dev, isServer } = options
    const sassRegex = /\.(scss|sass)$/;
    const sassModuleRegex = /\.module\.(scss|sass)$/;

    const loaderConfig = {
      extensions: ['scss', 'sass'],
      cssModules: false,
      cssLoaderOptions: {
        importLoaders: 2,
        localIdentName: "[local]___[hash:base64:5]",
      },
      dev,
      isServer,
      loaders: [
        {
          loader: 'sass-loader',
          options: ''
        }
      ]
    }

    const loaderConfigWithModules = Object.assign({}, loaderConfig, { cssModules: true })

    config.module.rules.push(
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: cssLoaderConfig(config, loaderConfig)
      },
      {
        test: sassModuleRegex,
        use: cssLoaderConfig(config, loaderConfigWithModules)
      }
    )
    return config
  }
};

module.exports = withPlugins([

  [typescript],
  [images],
  nextEnv(),

], nextConfig);