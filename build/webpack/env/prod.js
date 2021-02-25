import CompressionPlugin from "compression-webpack-plugin";

import { resolve } from "path";

export default function prodConfig(props) {
    const {
        source,
    } = props;

    return {
        entry: {
            app: [
                resolve(source, "index.tsx")
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
