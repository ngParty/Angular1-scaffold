const path = require( 'path' );
const webpack = require( 'webpack' );

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

/**
 * Webpack Constants
 */
const ENV = ( process.env.NODE_ENV || 'development' );
const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );

/**
 * Static metadata for index.html
 *
 * See: (custom attribute)
 */
const METADATA = {
  baseUrl: '/',
  lang: 'en',
  title: 'Tombaugh Regio',
  ENV: JSON.stringify( ENV ),
  host: '0.0.0.0',
  // port is determined from npm config
  // which is set in package.json
  // "config": {
  //    "port": "9000"
  // }
  port: process.env.npm_package_config_port || 9000,
  googleAnalytics: {
    trackingId: 'UA-XXXX-XX'
  }
};

const webpackConfigEntryPoints = {
  /**
   * Cache generated modules and chunks to improve performance for multiple incremental builds.
   * This is enabled by default in watch mode.
   * You can pass false to disable it.
   *
   * See: http://webpack.github.io/docs/configuration.html#cache
   * cache: false,
   *
   * The entry point for the bundle
   * Our Angular.js app
   *
   * See: http://webpack.github.io/docs/configuration.html#entry
   */
  polyfills: path.resolve( ROOT, 'polyfills.ts' ),
  vendor: path.resolve( ROOT, 'vendor.ts' ),
  main: path.resolve( ROOT, 'main.ts' )
};

/**
 * Developer tool to enhance debugging
 *
 * See: http://webpack.github.io/docs/configuration.html#devtool
 * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
 */
// const webpackDevtool = 'source-map';
const webpackDevtool =  'cheap-module-source-map';

const webpackPreLoaders = [

  /*
   * Tslint loader support for *.ts files
   *
   * See: https://github.com/wbuchwalter/tslint-loader
   */
  // @TODO codelyzer is breaking somehow source maps, allow this when it will be resolved
  {
    test: /\.ts$/,
    loader: 'tslint-loader',
    exclude: [ /node_modules/ ]
  },

  /**
   * Source map loader support for *.js files
   * Extracts SourceMaps for source files that as added as sourceMappingURL comment.
   *
   * See: https://github.com/webpack/source-map-loader
   */
  {
    test: /\.js$/,
    loader: 'source-map-loader',
    exclude: [
      // these packages have problems with their sourcemaps
      /node_modules\/ng-metadata/
      // helpers.root( 'node_modules/rxjs' ),
      // helpers.root( 'node_modules/@angular2-material' )
    ]
  }
];

const webpackConfigLoaders = [

  // Scripts
  {
    test: /\.ts$/,
    exclude: [ /node_modules/ ],
    loader: 'awesome-typescript-loader'
  },

  // Styles
  {
    test: /\.scss$/,
    loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
  },

  /**
   * Raw loader support for *.css files
   * Returns file content as string
   *
   * See: https://github.com/webpack/raw-loader
   */
  {
    test: /\.css$/,
    loaders: [ 'style-loader', 'css-loader' ]
  },

  /**
   * Raw loader support for *.html
   * Returns file content as string
   *
   * See: https://github.com/webpack/raw-loader
   */
  {
    test: /\.html$/,
    loader: 'raw-loader',
    exclude: [ path.resolve( ROOT, 'index.html' ) ]
  },

  /*
   * Json loader support for *.json files.
   *
   * See: https://github.com/webpack/json-loader
   */
  {
    test: /\.json$/,
    loader: 'json-loader'
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
  new DefinePlugin( {
    ENV: METADATA.ENV,
    'process.env': {
      ENV: METADATA.ENV,
      NODE_ENV: METADATA.ENV
    }
  } ),

  /**
   * Plugin: OccurenceOrderPlugin
   * Description: Varies the distribution of the ids to get the smallest id length
   * for often used ids.
   *
   * See: https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
   * See: https://github.com/webpack/docs/wiki/optimization#minimize
   */
  new webpack.optimize.OccurenceOrderPlugin( true ),

  /**
   * Plugin: CommonsChunkPlugin
   * Description: Shares common code between the pages.
   * It identifies common modules and put them into a commons chunk.
   *
   * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
   * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
   */
  new webpack.optimize.CommonsChunkPlugin({
    name: [ 'vendor', 'polyfills' ]
  }),

  /**
   * Plugin: CopyWebpackPlugin
   * Description: Copy files and directories in webpack.
   *
   * Copies project static assets.
   *
   * See: https://www.npmjs.com/package/copy-webpack-plugin
   */
  new CopyWebpackPlugin( [
    {
      from: 'src/assets',
      to: './'
    }
  ] ),

  /**
   * Plugin: HtmlWebpackPlugin
   * Description: Simplifies creation of HTML files to serve your webpack bundles.
   * This is especially useful for webpack bundles that include a hash in the filename
   * which changes every compilation.
   *
   * See: https://github.com/ampedandwired/html-webpack-plugin
   */
  new HtmlWebpackPlugin( {
    template: path.resolve( ROOT, 'index.html' ),
    chunksSortMode: 'dependency'
  } )

];

const webpackNode = {
  /**
   * Include polyfills or mocks for various node stuff
   * Description: Node configuration
   *
   * See: https://webpack.github.io/docs/configuration.html#node
   */
  global: 'window',
  process: true,
  crypto: 'empty',
  module: false,
  clearImmediate: false,
  setImmediate: false
};


/**
 * Static analysis linter for TypeScript advanced options configuration
 * Description: An extensible linter for the TypeScript language.
 *
 * See: https://github.com/wbuchwalter/tslint-loader
 */
const tslintConfig = {
  emitErrors: false,
  failOnHint: false,
  resourcePath: 'src'
};

module.exports = {
  metadata: METADATA,
  devtool: webpackDevtool,
  entry: webpackConfigEntryPoints,
  output: {
    /**
     * The output directory as absolute path (required).
     *
     * See: http://webpack.github.io/docs/configuration.html#output-path
     */
    path: DESTINATION,

    /**
     * Specifies the name of each output file on disk.
     * IMPORTANT: You must not specify an absolute path here!
     *
     * See: http://webpack.github.io/docs/configuration.html#output-filename
     */
    filename: '[name].js',

    /**
     * The filename of the SourceMaps for the JavaScript files.
     * They are inside the output.path directory.
     *
     * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
     */
    sourceMapFilename: '[name].map',

    /** The filename of non-entry chunks as relative path
     * inside the output.path directory.
     *
     * See: http://webpack.github.io/docs/configuration.html#output-chunkfilename
     */
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    /**
     * An array of extensions that should be used to resolve modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
     */
    extensions: [ '', '.ts', '.js' ],

    // Make sure root is src
    root: ROOT,

    // remove other default values
    modulesDirectories: [ 'node_modules' ]
  },
  watch: true,
  module: {
    preLoaders: webpackPreLoaders,
    loaders: webpackConfigLoaders
  },
  devServer: {
    // This is required for webpack-dev-server. The path should
    // be an absolute path to your build destination.
    outputPath: DESTINATION
  },
  plugins: webpackConfigPlugins,
  tslint: tslintConfig,
  node: webpackNode
};
