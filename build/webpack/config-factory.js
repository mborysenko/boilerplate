import merge from "webpack-merge";
import BUILD_MODES from "../common/constants";
import webpack from "webpack";

import HTMLPlugin from "html-webpack-plugin"
import HtmlWebpackTemplate from "html-webpack-template"
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin"

import devConfig from "./env/dev";
import prodConfig from "./env/prod";
import testConfig from "./env/test";
import { configuration } from "../configuration";

let envMapping = {
    [BUILD_MODES.DEV]: devConfig,
    [BUILD_MODES.PROD]: prodConfig,
    [BUILD_MODES.TEST]: testConfig,
};

export default function webpackConfigFactory(options) {

    let {
        paths,
        title,
        mode
    } = options;

    let {
        mountPoint,
    } = configuration;

    let {
        projectDir,
        source,
        dist
    } = paths;

    console.log(`Running mode is: ${mode}`);
    let envConfig = envMapping[mode];

    if (!envConfig) {
        console.warn(`Building mode is not set or is incorrect. Check NODE_ENV variable. Falling back to 'production'`);
        mode = BUILD_MODES.PROD;
        envConfig = envMapping[mode]
    }

    let commonConfig = {
        mode: mode,
        entry: {
            vendors: [
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
                "node_modules",
            ],
            extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx", ".css", ".less", ".dev.js"],
            plugins: [new TsconfigPathsPlugin()]
        },
        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
                {
                    test: /\.(tsx|ts)$/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/env", {}, "@babel/react", {}],
                                plugins: mode === BUILD_MODES.DEV ?
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
                    use: [
                        // MiniCssExtractPlugin.loader,
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: {
                                    mode: "local",
                                    localIdentName: "[local]-[hash:base64:5]"
                                }
                            }
                        }, {
                            loader: "less-loader"
                        }
                    ],
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
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(mode)
                }
            }),
            new HTMLPlugin({
                template: HtmlWebpackTemplate,
                filename: 'index.html',
                favicon: "src/static/favicon.ico",
                title: title,
                hash: true,
                appMountIds: [mountPoint],
                baseHref: '/',
                minify: {
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    useShortDoctype: true,
                    collapseWhitespace: true
                },
                showErrors: true,
                inject: false
            }),]

        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
    };

    return merge(commonConfig, envConfig(options));
};
