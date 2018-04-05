let webpack = require("webpack");
let HTMLPlugin = require("html-webpack-plugin");
let CompressionPlugin = require("compression-webpack-plugin");
let CopyWebpackPlugin = require("copy-webpack-plugin");

const path = require("path");
module.exports = (options) => {
    const {
        paths,
        title
    } = options;

    const {
        source,
        dist
    } = paths;

    return {
        entry: {
            app: [
                path.resolve(source, "index.tsx")
            ]
        },
        // optimization: {
        //     minimize: true,
        //     splitChunks: {
        //         name: "vendors",
        //         minChunks: Infinity
        //     },
        // },
        plugins: [
            new HTMLPlugin({
                template: path.resolve(source, "static/index.html"),
                filename: 'index.html',
                title: title,
                hash: true,
                minify: {
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    useShortDoctype: true,
                    collapseWhitespace: true
                },
                showErrors: true,
                inject: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendors",
                minChunks: Infinity
            }),
            new CompressionPlugin({
                asset: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.(js|html|css)$/,
                threshold: 10240,
                minRatio: 0.4
            }),
            // new CopyWebpackPlugin([{from: path.resolve(source, "favicon.ico"), to: dist}], options)
        ],
        externals: {
            "React": "react",
            "ReactDOM": "react-dom"
        }
    };
};