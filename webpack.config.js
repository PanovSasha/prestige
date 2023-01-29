const path = require('path');

const {ProvidePlugin} = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const SpritePlugin = require('svg-sprite-loader/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return config;
};

const fileLoaderConfig = (ext) => ([{
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
    outputPath: `${isProd ? '/' : ''}assets/${ext}`,
  },
}]);

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/js/index.js'],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            },
          },
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                paths: [path.resolve(__dirname, 'src/styles')],
                sourceMap: true,
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
          ],
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: fileLoaderConfig('fonts'),
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: path.resolve(__dirname, 'src/assets/sprite'),
        use: fileLoaderConfig('img'),
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src/assets/sprite'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              outputPath: 'assets/sprite/',
            },
          },
          'svgo-loader',
        ],
      },
    ],
  },
  devServer: {
    port: 3001,
    hot: isDev,
    historyApiFallback: true,
    inline: true,
    proxy: {
      '/bitrix': {
        target: 'http://s8.mserv.me',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  devtool: isDev ? 'source-map' : false,
  optimization: optimization(),
  plugins: [
    new SpritePlugin(),
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: 'contacts.html',
      template: './public/contacts.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: '404.html',
      template: './public/404.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CopyPlugin({
      patterns: [
        {from: './src/assets/img', to: './assets/img'},
        {from: './src/assets/images-demo', to: './assets/images-demo'},
      ],
    }),
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: filename('css'),
    }),
    new WebpackManifestPlugin(),
  ],
};
