const webpack = require( 'webpack' );
const webpackConfig = require( './webpack.config' );


/**
 * Source map for Karma from the help of karma-sourcemap-loader &  karma-webpack
 *
 * Do not change, leave as is or it wont work.
 * See: https://github.com/webpack/karma-webpack#source-maps
 */
const webpackDevtool = 'inline-source-map';

const webpackPostLoaders = [

  /**
   * Instruments JS files with Istanbul for subsequent code coverage reporting.
   * Instrument only testing sources.
   *
   * See: https://github.com/deepsweet/istanbul-instrumenter-loader
   */
  {
    test: /\.(js|ts)$/,
    loader: 'istanbul-instrumenter-loader',
    include: webpackConfig.resolve.root,
    exclude: [
      /\.(e2e|spec)\.ts$/,
      /node_modules/,
      // @TODO this is temporary, will remove when typescript-helpers will be extracted to separate package
      /(polyfills|vendor)\.ts$/
    ]
  }
];

const webpackNode = {
  /**
   * Include polyfills or mocks for various node stuff
   * Description: Node configuration
   *
   * See: https://webpack.github.io/docs/configuration.html#node
   */
  process: false
};

Object.assign( webpackConfig, {
  entry: {},
  output: {},
  devtool: webpackDevtool,
  watch: false,
  plugins: [],
  node: Object.assign( webpackConfig.node, webpackNode )
} );
Object.assign( webpackConfig.module, {
  postLoaders: webpackPostLoaders
} );

module.exports = webpackConfig;
