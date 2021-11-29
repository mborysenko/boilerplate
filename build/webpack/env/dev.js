import HMRPlugin from "webpack/lib/HotModuleReplacementPlugin";
import CircularDependencyPlugin from "circular-dependency-plugin";

import { resolve } from "path";

export default function devConfig(props) {
    const {
        source,
        projectDir,
        server,
    } = props;

    const middlewareEntry = `webpack-hot-middleware/client?http://${server.host}:${server.port}`;

    return {
        devtool: "source-map",
        resolve: {
            alias: {
                'react-dom': '@hot-loader/react-dom',
                'react': resolve(projectDir, 'node_modules/react'),
                'react-is': resolve(projectDir, 'node_modules/react-is'),
                'react-redux': resolve(projectDir, 'node_modules/react-redux'),
                'react-router': resolve(projectDir, 'node_modules/react-router'),
                'react-router-dom': resolve(projectDir, 'node_modules/react-router-dom'),
                'redux': resolve(projectDir, 'node_modules/redux'),
                'styled-components': resolve(projectDir, 'node_modules/styled-components'),
            }
        },
        entry: {
            app: [
                middlewareEntry,
                resolve(source, "index.dev.tsx")
            ],
            vendors: [
                middlewareEntry
            ]
        },
        plugins: [
            new HMRPlugin(),
            new CircularDependencyPlugin({
                // exclude detection of files based on a RegExp
                exclude: /a\.js|node_modules/,
                // include specific files based on a RegExp
                include: /src/,
                // add errors to webpack instead of warnings
                failOnError: false,
                // allow import cycles that include an asyncronous import,
                // e.g. via import(/* webpackMode: "weak" */ './file.js')
                allowAsyncCycles: true,
                // set the current working directory for displaying module paths
                cwd: projectDir,
            })
        ]
    }
}
