'use strict';
/**
 * Setup a server.
 * @module serve
 * @param {Object} options Build options.
 * @param {Object} gulp Instance of gulp.
 */
module.exports = function (options) {
    let CONSTANTS = require('../common/constants');

    const open = require('open');
    const path = require('path');
    const webpack = require('webpack');
    const express = require('express');

    const app = express();
    let dev = require('webpack-dev-middleware');
    let hot = require('webpack-hot-middleware');

    let {
        server,
        paths,
        mode
    } = options;

    const factoryWebpackConfig = require('../webpack/config-factory');

    let webpackConfig = factoryWebpackConfig(options);


    return function (cb) {
        let compiler = webpack(webpackConfig);

        if (mode === CONSTANTS.BUILD_MODES.DEV) {
            app.use(dev(compiler, {
                noInfo: true,
                publicPath: "/"
            }));

            app.use(hot(compiler));
        }
        serve(cb);

        function serve(callback) {

            app.get('/', function (req, res) {
                res.sendFile(path.join(paths.dist, 'index.html'));
            });

            app.use('/assets', express.static(path.join(paths.dist, 'assets')));

            app.listen(server.port, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    open(`http://${server.host}:${server.port}`);
                }
            });

            callback();
        }
    };
};
