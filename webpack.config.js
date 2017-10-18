const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/app/main.js'
    ],

    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.json'],
        alias: {
            glow: path.resolve('./node_modules/@meldcx/glow'),
            styles: path.resolve('./src/styles')
        },
        modules: ['node_modules']
    },


    module: {
        rules: [
            {
                test: /.scss$/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            },
            {
                test: /.html/,
                loader: 'html-loader'
            }
        ]
    },

    plugins: [new HTMLWebpackPlugin({
        title: 'MeldCX Guru - First App - Hello, Agent M',
        template: path.resolve('./index.html')
    })]
}
