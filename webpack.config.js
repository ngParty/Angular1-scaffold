const webpack = require( 'webpack' );

const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

const webpackConfigEntryPoints = {
  app: './src/bootstrap.ts'
};

const webpackConfigLoaders = [

  // Scripts
  {
    test: /\.ts$/,
    exclude: [ /node_modules/ ],
    loader: 'ts-loader'
  },

  // Styles
  {
    test: /\.scss$/,
    loaders: [ 'style', 'css', 'sass' ]
  }

];

const webpackConfigPlugins = [

  new HtmlWebpackPlugin({
    title: 'Tombaugh Regio',
    template: 'src/index.html',
    env: ENV,
    host: '0.0.0.0',
    port: process.env.npm_package_config_port,
    googleAnalytics: {
      trackingId: 'UA-XXXX-XX'
    }
  }),

  new CopyWebpackPlugin([
    {
      from: 'src/assets',
      to: './'
    }
  ])

  // // Load lodash into global
  // new webpack.ProvidePlugin( {
  //   lodash: 'lodash'
  // } )

];


module.exports = {
  devtool: 'source-map',
  entry: webpackConfigEntryPoints,
  output: {
    path: '/',
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    // Add `.ts` as a resolvable extension.
    extensions: [ '', '.webpack.js', '.web.js', '.ts', '.js' ]
  },
  watch: true,
  module: {
    loaders: webpackConfigLoaders
  },
  plugins: webpackConfigPlugins
};
