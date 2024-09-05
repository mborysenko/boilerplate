import webpackConfigFactory from '../webpack/config-factory';
import webpack from 'webpack';
import { Configuration } from "../../configuration";

/**
 * Bundles current project.
 * @module bundle
 * @param {Object} options Build props.
 */
export function bundle(options: Configuration) {
    webpack(webpackConfigFactory(options), (error, stats) => {
        if (error) {
            throw error;
        }
        console.log(stats?.toString({
            chunks: true,
            colors: true
        }));
    });
}

