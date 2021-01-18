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
        devtool: "source-map",
        resolve: {
            alias: {
                'react-dom': '@hot-loader/react-dom'
            }
        },
        entry: {
            app: [
                middlewareEntry,
                path.resolve(source, "index.dev.tsx")
            ],
            vendors: [
                middlewareEntry
            ]
        },
        plugins: [
            new HMRPlugin(),
        ]
    }
}
