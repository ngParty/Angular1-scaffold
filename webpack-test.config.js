const webpack = require( 'webpack' );
const webpackConfig = require( './webpack.config.js' );


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
    include: 'src' ,
    exclude: [
      /\.(e2e|spec)\.ts$/,
      /node_modules/
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

delete webpackConfig.entry;
delete webpackConfig.output;

Object.assign( webpackConfig, {
  devtool: webpackDevtool,
  watch: false,
  node: Object.assign( webpackConfig.node, webpackNode )
} );
Object.assign( webpackConfig.module, {
  postLoaders: webpackPostLoaders
} );

module.exports = webpackConfig;
