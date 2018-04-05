'use strict';

/**
 * Copy all source files to the dist folder.
 * @module copy-sources
 * @param {Object} options Build options.
 * @param {Object} gulp Instance of gulp.
 */
module.exports = (options, gulp) => {
    let debug = require('gulp-debug');
    let paths = options.paths;

    return function (cb) {
        // Copy sources
        gulp.src([
            paths.source + '**/*{.html,.xml,.json}',
            '!' + paths.dist
        ].concat(paths.exclude.global))
            .pipe(debug({ title: 'Copying' }))
            .pipe(gulp.dest(paths.dist))
            .on('end', cb);
    }
};
