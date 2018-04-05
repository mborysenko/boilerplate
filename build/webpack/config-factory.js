const merge = require("webpack-merge");
const path = require("path");
const CONSTANTS = require("../common/constants");

let ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractStyle = new ExtractTextPlugin("styles/[name].css");

let webpack = require("webpack");

let envMapping = {
    [CONSTANTS.BUILD_MODES.DEV]: require("./env/dev"),
    [CONSTANTS.BUILD_MODES.PROD]: require("./env/prod"),
    [CONSTANTS.BUILD_MODES.TEST]: require("./env/test"),
};

module.exports = (options) => {

    let {
        paths,
        mode
    } = options;

    let {
        projectDir,
        source,
        dist
    } = paths;


    let envConfig = envMapping[mode];

    let commonConfig = {
        entry: {
            vendors: [
                "babel-polyfill",
                "react",
                "react-dom"
            ]
        },
        output: {
            path: dist,
            filename: "assets/[name].js",
        },
        resolve: {
            modules: [
                projectDir,
                source,
                path.resolve(projectDir, "node_modules")
            ],
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx", ".css", ".less",".dev.js"]
        },
        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
                {
                    test: /\.tsx$/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["env", {
                                    plugins: false
                                }, "react", {}],
                                plugins: mode === CONSTANTS.BUILD_MODES.DEV ?
                                    ["react-hot-loader/babel"] :
                                    []
                            }
                        },
                        "ts-loader"
                    ],
                    exclude: "/node_modules/"
                },
                {
                    test: /\.less$/,
                    use: extractStyle.extract({
                        use: [
                            'css-loader',
                            'less-loader'
                        ]
                    }),
                },
                {
                    test: /\.(eot|otf|svg|ttf|woff|woff2)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: "/assets/[name].[ext]"
                        }
                    }
                }
            ]
        },
        // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
        plugins: [
            extractStyle,
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(mode)
                }
            })
        ]

        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
    };

    return merge(commonConfig, envConfig(options));
};
