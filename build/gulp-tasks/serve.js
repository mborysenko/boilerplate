import BUILD_MODES from "../common/constants";
import opn from 'opn';
import path from 'path';
import webpack from 'webpack';
import express from 'express';
import dev from 'webpack-dev-middleware';
import hot from 'webpack-hot-middleware';
import webpackConfigFactory from '../webpack/config-factory';
/**
 * Setup a server.
 * @module serve
 * @param {Object} options Build options.
 * @param {Object} gulp Instance of gulp.
 */
export default function (options) {
    const app = express();

    let {
        server,
        paths,
        mode
    } = options;

    let webpackConfig = webpackConfigFactory(options);


    return function (cb) {
        let compiler = webpack(webpackConfig);

        if (mode === BUILD_MODES.DEV) {
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
                    opn(`http://${server.host}:${server.port}`);
                }
            });

            callback && callback();
        }
    };
};
