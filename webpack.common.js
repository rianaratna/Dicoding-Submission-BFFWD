const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        main: "./src/app.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "assets/[name][ext]",
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader", //agar atribut src bisa di-bundle juga
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/inline"
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
}