import HMRPlugin from "webpack/lib/HotModuleReplacementPlugin";

import path from "path";

export default function devConfig(options) {
    const {
        paths,
        server,
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
        ]
    }
}
