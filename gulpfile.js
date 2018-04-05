'use strict';

const CONSTANTS = require('./build/common/constants');
const gulp = require('gulp');
const fs = require('fs-extra');
const path = require('path');
const args = require('yargs').argv;
const srcFolder = path.resolve(__dirname, 'src');

let BUILD_OPTIONS = {
    title: 'Demo Application!',
    paths: {
        projectDir: path.resolve(__dirname),
        source: srcFolder,
        dist: path.resolve(__dirname, 'dist'),
        build: path.resolve(__dirname, 'build'),
        exclude: {
            global: [
                '!' + srcFolder + '**/**/[.]git*', // .gitignore, .gitattributes..
                '!./{[.]idea,[.]idea/**}',
                '!' + srcFolder + '/typings/}'
            ],
        }
    },
    mode: args.env || process.env.NODE_ENV || CONSTANTS.BUILD_MODES.PROD,
    server: {
        host: 'localhost',
        port: 9090
    }
};

gulp.task('clean', (cb) => {
    fs.remove(BUILD_OPTIONS.paths.dist, cb);
});

gulp.task('bundle', require('./build/gulp-tasks/package-project')(BUILD_OPTIONS));

gulp.task('build', ['clean', 'bundle']);

gulp.task('serve', ['build'], require('./build/gulp-tasks/serve')(BUILD_OPTIONS));
