const webpack = require( 'webpack' );
const webpackConfig = require( './webpack.config' );

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');

/**
 * Webpack Constants
 */
const ENV = (process.env.NODE_ENV || 'development');

/**
 * Source map for Karma from the help of karma-sourcemap-loader &  karma-webpack
 *
 * Do not change, leave as is or it wont work.
 * See: https://github.com/webpack/karma-webpack#source-maps
 */
const webpackDevtool = 'inline-source-map';

const webpackLoaders = [

	/**
	 * Instruments JS files with Istanbul for subsequent code coverage reporting.
	 * Instrument only testing sources.
	 *
	 * See: https://github.com/deepsweet/istanbul-instrumenter-loader
	 */
	{
		test: /\.(js|ts)$/,
		loader: 'istanbul-instrumenter-loader',
		enforce: 'post',
		include: webpackConfig.resolve.root,
		exclude: [
			/\.(e2e|spec)\.ts$/,
			/node_modules/,
			// @TODO this is temporary, will remove when typescript-helpers will be extracted to separate package
			/(polyfills|vendor)\.ts$/
			]
	}
	];

const webpackConfigPlugins = [

	/**
	 * Plugin: DefinePlugin
	 * Description: Define free variables.
	 * Useful for having development builds with debug logging or adding global constants.
	 *
	 * Environment helpers
	 *
	 * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
	 */
	// NOTE: when adding more properties, make sure you include them in globals.d.ts
	new DefinePlugin({
		ENV : ENV,
		'process.env' : {
			ENV : ENV,
			NODE_ENV : ENV
		}
	})

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
	devtool: webpackDevtool,
	watch: false,
	plugins: [], // clear plugins
	node: Object.assign( webpackConfig.node, webpackNode )
} );
Object.assign( webpackConfig, {
	plugins: webpackConfigPlugins
} );
Object.assign( webpackConfig.module, {
	loaders: Object.assign( webpackConfig.module.loaders, webpackLoaders )
} );

module.exports = webpackConfig;
