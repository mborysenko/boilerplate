'use strict';

/**
 * Package current project.
 * @module package-project
 * @param {String} options Build options.
 */
module.exports = (options) => {
	const factoryWebpackConfig = require('../webpack/config-factory');
    const webpack = require('webpack');

    return (done) => {

        let firstTimeEmit = true;
        webpack(factoryWebpackConfig(options), (error, stats) => {
            console.log(stats.toString({
                chunks: false,
                colors: true
            }));

            if (firstTimeEmit) {
                firstTimeEmit = false;
                done()
            }
        });
    }
};
