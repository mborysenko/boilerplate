import open from 'open';
import {join} from 'path';
import webpack from 'webpack';
import path from 'path';
import express from 'express';
import dev from 'webpack-dev-middleware';
import hot from 'webpack-hot-middleware';
import webpackConfigFactory from '../webpack/config-factory';

/**
 * Sets up the server and run it.
 * @module serve
 * @param {Object} props Build props.
 */
export default function (props) {
    const app = express();

    let {
        server,
        dist,
    } = props;

    let webpackConfig = webpackConfigFactory(props);


    return function (done) {
        let compiler = webpack(webpackConfig);

        app.use(dev(compiler, {
            publicPath: "/"
        }));

        app.use(hot(compiler));

        serve(done);

        function serve(cb) {
            //Middleware
            app.use(express.static(join(dist, '/assets')));

            //Routing. Order does matter
            app.get('/favicon.ico', function (req, res) {
                res.sendFile(join(dist, 'favicon.ico'));
            });

            app.get('*', function (req, res) {
                const filename = path.resolve(compiler.outputPath, 'index.html');
                compiler.outputFileSystem.readFile(filename, (err, result) => {
                    if (err) {
                        return cb?.(err);
                    }
                    res.set('content-type','text/html');
                    res.send(result);
                    res.end();
                });
            });

            //Starting
            app.listen(server.port, function (err) {
                if (err) {
                    console.log(err);
                    cb?.(err)
                } else {
                    open(`http://${server.host}:${server.port}/`)
                        .then(() => {
                            cb?.()
                        })
                        .catch((err) => {
                            console.log(err);
                            cb?.(err)
                        });
                }
            });
        }
    };
};
