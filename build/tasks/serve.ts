import open from 'open';
import { join } from 'path';
import webpack from 'webpack';
import path from 'path';
import express from 'express';
import dev from 'webpack-dev-middleware';
import hot from 'webpack-hot-middleware';
import webpackConfigFactory from '../webpack/config-factory';
import { Configuration } from "../../configuration";

/**
 * Sets up the server and run it.
 * @module serve
 * @param {Object} options Build props.
 * @param callback
 */
export const serve = (options: Configuration, callback: (err?: Error) => void) => {
    const app = express();

    let {
        server,
        dist,
    } = options;

    let webpackConfig = webpackConfigFactory(options);

    let compiler = webpack(webpackConfig);

    app.use(dev(compiler, {
        publicPath: "/"
    }));

    app.use(hot(compiler));

    //Middleware
    app.use(express.static(join(dist, '/assets')));

    //Routing. Order does matter
    app.get('/favicon.ico', function (req, res) {
        res.sendFile(join(dist, 'favicon.ico'));
    });

    app.get('*', function (req, res) {
        const filename = path.resolve(compiler.outputPath, 'index.html');
        compiler.outputFileSystem?.readFile(filename, (err, result) => {
            if (err) {
                return callback?.(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });

    //Starting
    app.listen(server.port, () => {
        open(`http://${server.host}:${server.port}/`)
            .then(() => {
                callback?.();
            })
            .catch((err) => {
                console.log(err);
                callback?.(err);
            });
    });
};
