/**
 * @author: @ngParty
 */
import webpack = require('webpack');
import karma = require('karma');
import { WebpackConfiguration } from './webpack.config';
import testWebpackConfig from './webpack-test.config';

/**
 * Interface to define Karma coverage reporter configuration
 *
 * @property {string} type - Specify a reporter type
 * @property {string} dir - Output directory for coverage reports. If relative, resolved against Configurationoptions
 * @property {Array<{type:String}>} reporters -
 * @see {link https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md}
 */
interface KarmaCoverageReporterConfigurationOptions {
  dir?: string,
  type?: 'html' | 'lcov' | 'lcovonly' | 'text' | 'text-summary' | 'cobertura' | 'teamcity' | 'json',
  reporters?: {type: string}[]
}

/**
 * Interface to extend the default Karma configuration options to add
 * stuff needed for code coverage & webpack.
 *
 * @augments karma.Config
 * @property {KarmaCoverageReporterConfigurationOptions} coverageReporter - Settings for karma-coverage.
 * @property {webpack.Configuration}  webpack - Webpack configuration settings.
 */
interface KarmaConfig extends karma.ConfigOptions {
  coverageReporter?: KarmaCoverageReporterConfigurationOptions;
  webpack?: WebpackConfiguration;
  webpackServer?: { noInfo?: boolean }
}

module.exports = function ( config: karma.Config ) {

  config.set( {

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    // basePath: '',
    // basePath to the root from ts-out
    basePath: __dirname + '/..',

    /*
     * Frameworks to use
     *
     * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
     */
    frameworks: [ 'jasmine' ],

    // list of files to exclude
    exclude: [],

    /*
     * list of files / patterns to load in the browser
     *
     * we are building the test environment in ./spec-bundle.js
     */
    files: [ { pattern: './config/spec-bundle.ts', watched: false } ],

    /*
     * preprocess matching files before serving them to the browser
     * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: { './config/spec-bundle.ts': [ 'coverage', 'webpack', 'sourcemap' ] },

    // Webpack Config at ./webpack-test.config.js
    webpack: testWebpackConfig,

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json' },
        { type: 'html' }
      ]
    },

    // Webpack please don't spam the console when running in karma!
    webpackServer: { noInfo: true },

    /*
     * test results reporter to use
     *
     * possible values: 'dots', 'progress'
     * available reporters: https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: [ 'mocha', 'coverage' ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    /*
     * level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    /*
     * start these browsers
     * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: [
      'Chrome'
      // 'PhantomJS'
    ],

    /*
     * Continuous Integration mode
     * if true, Karma captures browsers, runs the tests and exits
     */
    singleRun: true
  } as KarmaConfig );

};
