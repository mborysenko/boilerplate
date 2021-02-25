import gulp from 'gulp';
import debug from 'gulp-debug';

/**
 * Copy all source files to the dist folder.
 * @param {Object} options Build options.
 */
export default function (options) {
    const {
        dist,
        filesToCopy,
    } = options;

    return function (done) {
        gulp.src(filesToCopy)
            .pipe(debug({ title: 'Copying files' }))
            .pipe(gulp.dest(dist))
            .on('end', done);
    }
};
