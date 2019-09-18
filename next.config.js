const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
const typescript = require('@zeit/next-typescript')
const withPlugins = require('next-compose-plugins')
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
const fonts = require('next-fonts')
const optimizedImages = require('next-optimized-images')
const webpack = require('webpack')
const withSize = require('next-size')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

dotenvLoad()

const nextConfig = {
  webpack(config, options) {
    const { dev, isServer } = options
    const sassRegex = /\.(scss|sass)$/
    const cssRegex = /\.css$/
    const sassModuleRegex = /\.module\.(scss|sass)$/

    const scssLoaderConfig = {
      extensions: ['scss', 'sass'],
      cssModules: false,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]_[hash:base64:5]',
      },
      dev,
      isServer,
      loaders: [
        {
          loader: 'sass-loader',
          options: '',
        },
      ],
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
        use: cssLoaderConfig(config, scssLoaderConfig),
      },
      {
        test: sassModuleRegex,
        use: cssLoaderConfig(config, scssLoaderConfigWithModules),
      },
      {
        test: cssRegex,
        use: cssLoaderConfig(config, loaderConfig),
      }
    )

    config.plugins.unshift(
      // эти варнинги не важны т.к. используется CSSModules https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
      new FilterWarningsPlugin({
        exclude: /\[mini-css-extract-plugin\][^]*Conflicting order between:/,
      })
    )

    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    )

    if (dev) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        loader: 'tslint-loader',
      })

      const IgnoreNotFoundExportPlugin = require('ignore-not-found-export-webpack-plugin')
      config.plugins.push(
        // ignore import inerfaces warnings
        new IgnoreNotFoundExportPlugin({
          include: [/\.tsx?$/],
        })
      )
    } else {
      config.plugins.push(
        new BundleAnalyzerPlugin({ analyzerMode: 'static' })
      )
    }
    return config
  },
}

module.exports = withPlugins(
  [
    [typescript],
    [fonts],
    [withSize],
    [
      optimizedImages,
      {
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
          quality: 80,
        },
        optipng: {
          optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
          interlaced: true,
          optimizationLevel: 3,
        },
        svgo: {
          // enable/disable svgo plugins here
        },
        webp: {
          preset: 'default',
          quality: 75,
        },
      },
    ],
    nextEnv(),
  ],
  nextConfig
)
