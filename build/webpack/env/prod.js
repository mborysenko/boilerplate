import CompressionPlugin from "compression-webpack-plugin";

import path from "path";

export default function prodConfig(options) {
    const {
        paths,
    } = options;

    const {
        source,
    } = paths;

    return {
        entry: {
            app: [
                path.resolve(source, "index.tsx")
            ]
        },
        plugins: [
            new CompressionPlugin({
                filename: "[path][base].gz[query]",
                algorithm: "gzip",
                test: /\.(js|html|css)$/,
                threshold: 10240,
                minRatio: 0.4,
            }),
        ],
        optimization: {
            minimize: true,
        },
        externals: {
            "React": "react",
            "ReactDOM": "react-dom"
        }
    };
};
