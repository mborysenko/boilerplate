import HMRPlugin from "webpack/lib/HotModuleReplacementPlugin";
import HTMLPlugin from "html-webpack-plugin";
import HtmlWebpackTemplate from "html-webpack-template"

import path from "path";

export default function devConfig(options) {
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
                template: HtmlWebpackTemplate,
                filename: 'index.html',
                appMountIds: ['application'],
                hash: true,
                minify: false,
                showErrors: true,
                inject: false
            })
        ]
    }
}
