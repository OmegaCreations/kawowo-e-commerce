const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    output: { // where files will be bundled to
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },
    entry: ["regenerator-runtime/runtime.js", "./src/index.js"],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    // creates separate css file instead of adding style tag
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                   'file-loader'
                ]
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({ 
            patterns: [ 
             { from: './src/assets/img/icon.png' },
            ]
         })
    ],
};