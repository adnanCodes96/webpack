const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode has 3 values: development production and none
    mode: 'development', // default mode is none but never use that // production - minimise files // development is for tracing errors

    // files from src folder
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
    },

    // files that goes to dist folder
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: '[name].bundle.js'
        filename: '[name].[contenthash].js', // every time when build script is started [contenthash] will give unique name
        assetModuleFilename: '[name][ext]',
        clean: true // this will clean dist folder from previous main[contenthash].js files
    },

    // loaders - turns non js files into the modules (.html, svg, .css ...)
    module: {
        rules: [
            // css
            {test: /\.css$/, use: ['style-loader', 'css-loader']},

            // images
            {test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource'},

            // js for babel
            {test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
            }
    ],
    },

    devtool: 'inline-source-map', // this will tell us where error come from in browser
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5001, // default 8080
        open: true,
        hot: true,
    },

    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Just a Demo',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temp.html')
        }),
    ]
};