import webpackConfigFactory from '../webpack/config-factory';
import webpack from 'webpack';

/**
 * Bundles current project.
 * @module bundle
 * @param {Object} props Build props.
 */
export function bundle(props) {
    return (done) => {
        webpack(webpackConfigFactory(props), (error, stats) => {
            console.log(stats.toString({
                chunks: true,
                colors: true
            }));
        });

        done?.();
    }
}
