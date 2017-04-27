const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
let path = require('path');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //supports es5
const UglifyJSPlugin = require('uglify-js'); //supports es6
//require('source-map-support');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app/app.js',
        //vendor: ['jquery'] //include combination
    },

    // may be configured with many bundles dev server
    // https://wohugb.gitbooks.io/webpack/content/dev_tools/webpack-dev-server.html
    devServer: {
        inline: true, //не обязательно // This adds the webpack-dev-server client entry point to the webpack configuration.
        port: 8285,
        hot: true,
        // publicPath: '/dist/', //location of bundled file //only in production mode:
        // "http://www.cdn.com/"
        stats: {
            colors: true,
            //chunks: false
        },
        overlay: {
            warnings: true,
            errors: true,
        },
        /*proxy: {
            '*': 'http://localhost:8285'
        },*/
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
        },
        historyApiFallback: true,
        watchContentBase: true,
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'), // string
        sourceMapFilename: '[name].bundle.js.map',
        // the target directory for all output files must be an absolute path (use the
        // Node.js path module) publicPath: '/assets/', // string the url to the output
        // directory resolved relative to the HTML page
        library: 'MyLibrary', // string,
        // the name of the exported library
        libraryTarget: 'umd', // universal module definition
        // the type of the exported library
    },

    module: {
        rules: [
            //for using imports loader plugin to import es6 dependencies
            /* your other rules for JavaScript transpiling go in here*/
            {
                test: /\.(png|jpg)$/,
                // "include" is commonly used to match the directories
                /*include: [
                    path.resolve(__dirname, "app/src"),
                    path.resolve(__dirname, "app/test")
                ],*/
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
            {
                //test: /vendor\/.+\.(jsx|js)$/,
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'test/'),
                use: [
                    {
                        loader: 'babel-loader',
                        /*options: {
                            presets: ['latest']
                        }*/
                    },
                    //does not work?? you can put other 3d party libs(jquery) in vendor directory
                    /* {
                        loader: 'imports?jQuery=jquery,$=jquery,this=>window',
                    },*/
                ],
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: true,
                                minimize: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            /*options: {
                                includePaths: ['./src/scss/main.scss'],
                            },*/
                        },
                    ],
                }),
            },
        ],
    },

    // source map kinds: https://survivejs.com/webpack/building/source-maps/ eval
    // //each module wrapped in eval functions cheap-eval-source-map //eval + base64
    // encoded version of the code as a data url cheap-module-eval-source-map //same
    // + highter performance eval-source-map // slowest + more data friendly source
    // maps: cheap-source-map //miss column mappings cheap-module-source-map //the
    // same as previous except source maps from loaders are simplified to a single
    // mapping per line source-map //provides the best quality with the complete
    // result, but it's also the slowest option. hidden-source-map // is the same as
    // source-map except it doesn't write references to the source maps to the
    // source files devtool: 'cheap-module-source-map',
    //devtool: 'inline-source-map',
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //for deve only
        new ExtractTextPlugin({ filename: '[name].bundle.css', disable: false, allChunks: true }), //break the webpack // ---------------------------------------------------------------------// общая

        //works likewise: import $ from 'jquery'; (только в подключаемом модуле)
        /*      new webpack.ProvidePlugin({
                $: 'jquery',
                $: 'jquery',
                jquery: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'window.jquery': 'jquery',
            }), //(глобальная область видимости)*/

        // new ExtractTextPlugin('styles.css') uglify plugin //webpack -p minification
        // flag
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
            sourceMap: true,
        }), //unable for es6 minification
        // new UglifyJSPlugin(); часть, используемая в entryPoint1 and entryPoint2
        // (главное - импортировать вызов не обязателен) entryPointChunk1.bundle.js and
        // entryPointChunk2.bundle.js has been generated without code in
        // chunk.js.bundle.js так как общая часть импортируется 2 модулями:
        // entryPointChunk1.js, entryPointChunk2.js то minChunks: 2 If we declare
        // minChunks: 3, our commons.js file would be empty since we don’t have 3 or
        // more modules that require the same libraries. в том случае, если стили
        // импортируются для 1 entryPoint - для данного entryPoint создается файл
        // стилей, иначе - кладутся в common.js.bundle.js
        /*  new webpack
            .optimize
            .CommonsChunkPlugin({name: 'common.js', minChunks: 2}),//not supported with karma*/
        // static modules import
        // https://medium.com/@adamrackis/vendor-and-code-splitting-in-webpack-2-6376358
        // f 1923
        // ---------------------------------------------------------------------//
        // --generated 2 chunks without general parts
        /*new webpack.optimize.CommonsChunkPlugin({
            filename: '[name].chunks.js',
            children: true,
            async: false,
        }),*/
        // ---------------------------------------------------------------------//
        // vendor optimization module chunks //проверить когда будет собран bundle es6
        // d3js
        /* new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            // filename: "vendor.js"
            // (Give the chunk a different name)
            minChunks: Infinity,
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        }),*/
    ],

    //
    resolve: {
        // options for resolving module requests (does not apply to resolving to
        // loaders) can include es5 js modules and css
        alias: {
            app: path.resolve(__dirname, './src/app/'),
            'es5 modules': path.resolve(__dirname, './src/es5 modules'),
            'es6 modules': path.resolve(__dirname, './src/es6 modules'),
        },
        modules: [
            __dirname,
            path.resolve(__dirname, './node_modules'),
            path.resolve(__dirname, './src'),
            path.resolve(__dirname, './dist'),
            //path.resolve(__dirname, './test'),
        ],

        extensions: ['*', '.js', '.json', '.css', 'png'],
    },

    resolveLoader: {
        modules: ['node_modules', '../../'],
    },
    //
    /*externals: {
        //The externals configuration option provides a way of excluding dependencies from the output bundles
        jquery: 'jQuery',
    },*/
    //webpack-dev-server info: http://localhost:8285/webpack-dev-server
};
