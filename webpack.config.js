const path = require("path");

const { ProvidePlugin } = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const SpritePlugin = require("svg-sprite-loader/plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
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

const fileLoaderConfig = (ext) => [
  {
    loader: "file-loader",
    options: {
      name: "[name].[ext]",
      outputPath: `assets/${ext}`,
    },
  },
];

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/js/index.js"],
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
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
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                paths: [path.resolve(__dirname, "src/styles")],
                sourceMap: true,
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: fileLoaderConfig("fonts"),
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: path.resolve(__dirname, "src/assets/sprite"),
        use: fileLoaderConfig("img"),
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "src/assets/sprite"),
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              extract: true,
              outputPath: "assets/sprite/",
            },
          },
          "svgo-loader",
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
      "/bitrix": {
        target: "http://s8.mserv.me",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  devtool: isDev ? "source-map" : false,
  optimization: optimization(),
  plugins: [
    new SpritePlugin(),
    new ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),

    new HTMLWebpackPlugin({
      template: "./public/index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "contacts.html",
      template: "./public/contacts.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "portfolio.html",
      template: "./public/portfolio.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "services.html",
      template: "./public/services.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "404.html",
      template: "./public/404.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/adigeya.html",
      template: "./public/stands/adigeya.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/aquaterm.html",
      template: "./public/stands/aquaterm.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/around-the-world.html",
      template: "./public/stands/around-the-world.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/dragger.html",
      template: "./public/stands/dragger.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/dula.html",
      template: "./public/stands/dula.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/ens.html",
      template: "./public/stands/ens.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/flowers.html",
      template: "./public/stands/flowers.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/horizont.html",
      template: "./public/stands/horizont.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/impex.html",
      template: "./public/stands/impex.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/inoteh.html",
      template: "./public/stands/inoteh.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/krim.html",
      template: "./public/stands/krim.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/leco.html",
      template: "./public/stands/leco.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/light-house.html",
      template: "./public/stands/light-house.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/magician.html",
      template: "./public/stands/magician.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/maripaper.html",
      template: "./public/stands/maripaper.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/megafon.html",
      template: "./public/stands/megafon.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/miland.html",
      template: "./public/stands/miland.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/mogotex.html",
      template: "./public/stands/mogotex.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/horizont.html",
      template: "./public/stands/horizont.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/orange-cat.html",
      template: "./public/stands/orange-cat.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/profpress20years.html",
      template: "./public/stands/profpress20years.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/profpress.html",
      template: "./public/stands/profpress.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/rosatom-krim.html",
      template: "./public/stands/rosatom-krim.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/rosatom-moscow.html",
      template: "./public/stands/rosatom-moscow.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/ruskart.html",
      template: "./public/stands/ruskart.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/silva.html",
      template: "./public/stands/silva.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/thailand.html",
      template: "./public/stands/thailand.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/ucm.html",
      template: "./public/stands/ucm.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new HTMLWebpackPlugin({
      filename: "stands/vyazma.html",
      template: "./public/stands/vyazma.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets/img", to: "./assets/img" },
        { from: "./src/assets/images-demo", to: "./assets/images-demo" },
        { from: "./src/lib/", to: "./lib" },
      ],
    }),
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: filename("css"),
    }),
    new WebpackManifestPlugin(),
  ],
};
