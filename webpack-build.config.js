const webpack = require( 'webpack' );

const webpackConfig = require( './webpack.config' );

/**
 * Static analysis linter for TypeScript advanced options configuration
 * Description: An extensible linter for the TypeScript language.
 *
 * See: https://github.com/wbuchwalter/tslint-loader
 */
const tslintConfig = {
  emitErrors: true,
  failOnHint: true
};

const webpackConfigPlugins = [
  // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
  // Only emit files when there are no errors
  new webpack.NoErrorsPlugin(),

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
  // Dedupe modules in the output
  new webpack.optimize.DedupePlugin(),

  // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
  // Minify all javascript, switch loaders to minimizing mode
  new webpack.optimize.UglifyJsPlugin( {
    compress: {
      warnings: false
    }
  } )
];

webpackConfig.plugins.push.apply( webpackConfig.plugins, webpackConfigPlugins );

Object.assign( webpackConfig, {
  watch: false,
  output: Object.assign( webpackConfig.output, {
    // Path where bundle files will be served on production env
    publicPath: '/'
  } ),
  tslint: Object.assign( webpackConfig.tslint, tslintConfig )
} );

module.exports = webpackConfig;
