const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

let plugins = [
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [autoprefixer({ browsers: ['last 10 versions'] })],
            debug: true,
        },
    }),
    new ExtractTextPlugin('stylesheets/bundle.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
];

module.exports = {
    plugins,
    entry: ['babel-polyfill', './src/app.jsx'],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'javascript/bundle.js',
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: ExtractTextPlugin.extract({ use: 'css-loader!postcss-loader!resolve-url-loader!sass-loader', publicPath: '../' }) },
            { test: /\.css$/, loader: ExtractTextPlugin.extract({ use: 'css-loader!postcss-loader!resolve-url-loader', publicPath: '../' }) },
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.(js|jsx)$/,
                loaders: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
