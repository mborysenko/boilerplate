let HMRPlugin = require("webpack/lib/HotModuleReplacementPlugin");
let HTMLPlugin = require("html-webpack-plugin");

const path = require("path");
module.exports = (options) => {
    const {
        paths,
        server,
        title
    } = options;

    const {
        source
    } = paths;
    let middlewareEntry = "webpack-hot-middleware/client?http://" + server.host + ":" + server.port;
    return {
        devtool: "cheap-source-map",
        entry: {
            app: [
                "react-hot-loader/patch",
                middlewareEntry,
                path.resolve(source, "index.dev.tsx")
            ],
            vendors: [
                "react-hot-loader/patch",
                middlewareEntry
            ]
        },
        plugins: [
            new HMRPlugin(),
            new HTMLPlugin({
                title: title,
                template: path.resolve(source, "static/index.html"),
                filename: 'index.html',
                hash: true,
                minify: false,
                showErrors: true,
                inject: false
            })
        ]
    }
};
