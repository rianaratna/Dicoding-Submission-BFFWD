const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, "./src"),
        },
        compress: true,
        port: 9000,
        liveReload: true,
    },
    plugins: [new MiniCssExtractPlugin()]
})