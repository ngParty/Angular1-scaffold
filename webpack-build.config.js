const webpack = require( 'webpack' );

const webpackConfig = require( './webpack.config' );

const webpackConfigPlugins = [
  // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
  // Only emit files when there are no errors
  new webpack.NoEmitOnErrorsPlugin()
];

webpackConfig.plugins.push.apply( webpackConfig.plugins, webpackConfigPlugins );

Object.assign( webpackConfig, {
  watch: false,
  output: Object.assign( webpackConfig.output, {
    // Path where bundle files will be served on production env
    publicPath: '/'
  } )
} );

module.exports = webpackConfig;
