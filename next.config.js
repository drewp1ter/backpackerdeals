const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
const typescript = require('@zeit/next-typescript');
const images = require('next-images');
const withPlugins = require('next-compose-plugins');
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const fonts = require('next-fonts');

dotenvLoad();

const nextConfig = {
  webpack(config, options) {
    const { dev, isServer } = options
    const sassRegex = /\.(scss|sass)$/;
    const cssRegex = /\.css$/;
    const sassModuleRegex = /\.module\.(scss|sass)$/;

    const scssLoaderConfig = {
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

    const loaderConfig = {
      extensions: ['css'],
      dev,
      isServer,
      cssLoaderOptions: {
        importLoaders: 1,
      },
    }

    const scssLoaderConfigWithModules = Object.assign({}, scssLoaderConfig, { cssModules: true })

    config.module.rules.push(
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: cssLoaderConfig(config, scssLoaderConfig)
      },
      {
        test: sassModuleRegex,
        use: cssLoaderConfig(config, scssLoaderConfigWithModules)
      },
      {
        test: cssRegex,
        use: cssLoaderConfig(config, loaderConfig)
      }
    )
    return config
  }
};

module.exports = withPlugins([

  [typescript],
  [images],
  [fonts],
  nextEnv(),

], nextConfig);