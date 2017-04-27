// Karma configuration Generated on Mon Apr 24 2017 17:36:03 GMT+0300 (RTZ 2

//var webpackKarmaConfig = require('./webpack.karma.config.js');

let path = require('path');

module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use available frameworks:
        // https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'source-map-support'],

        plugins: [
            'karma-chrome-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-coverage',
            'karma-mocha-reporter',
            'karma-source-map-support',
        ],

        // list of files / patterns to load in the browser
        files: ['test/test_index.js'],

        preprocessors: {
            // add webpack as preprocessor
            'test/test_index.js': ['webpack', 'sourcemap'],
        },

        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                // options for resolving module requests (does not apply to resolving to
                // loaders) can include es5 js modules and css
                alias: {
                    'es5 modules': path.resolve(__dirname, './src/es5/modules'),
                    'es6 modules': path.resolve(__dirname, './src/es6/modules'),
                    es5Case: path.resolve(__dirname, './test/es5Case'),
                    es6Case: path.resolve(__dirname, './test/es6Case'),
                },
                //modules: [__dirname, path.resolve(__dirname, './test/dist')],
                extensions: ['*.spec.js', '*.js', '.js'],
            },
        },

        // list of files to exclude
        exclude: [],

        // test results reporter to use possible values: 'dots', 'progress' available
        // reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'mocha', 'coverage'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging possible values: config.LOG_DISABLE || config.LOG_ERROR ||
        // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers available browser launchers:
        // https://npmjs.org/browse/keyword/karma-launcher //browsers: ['Chrome'],
        browsers: ['ChromeWithoutSecurity'],
        customLaunchers: {
            ChromeWithoutSecurity: {
                base: 'Chrome',
                flags: ['--disable-web-security'],
            },
        },
        // Continuous Integration mode if true, Karma captures browsers, runs the tests
        // and exits
        singleRun: false,

        //webpack: webpackKarmaConfig, //webpack configuration

        webpackServer: {
            noInfo: true, //please don’t spam the console when running in karma!
        },

        coverageReporter: {
            type: 'html', //produces a html document after code is run
            dir: './test/coverage/', //path to created html doc

            instrumenterOptions: {
                istanbul: {
                    noCompact: true,
                },
            },
        },

        // Concurrency level how many browser should be started simultaneous
        concurrency: Infinity,
    });
};
