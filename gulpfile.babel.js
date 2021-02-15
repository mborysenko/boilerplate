import BUILD_MODES from './build/common/constants';
import * as fs from 'fs-extra';
import path from 'path';
import gulp from 'gulp';

import bundle from './build/gulp-tasks/package-project';
import start from './build/gulp-tasks/serve';
import jest from './build/gulp-tasks/jest';

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
                '!./{[.]idea,[.]idea/**}'
            ],
        }
    },
    jest: {
        configFile: path.join(path.resolve(__dirname), 'jest/jest.config.ts'),
    },
    mode: process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : BUILD_MODES.PROD, //Production mode is the default
    server: {
        host: 'localhost',
        port: 9090
    }
};

gulp.task("clean", (cb) => {
    let { paths } = BUILD_OPTIONS;
    console.log(`Removing ${paths.dist} folder...`);
    fs.remove(paths.dist, cb);
});

gulp.task("build", (cb) => {
    bundle(BUILD_OPTIONS)(cb);
});

gulp.task("serve", (cb) => {
    start(BUILD_OPTIONS)(cb);
});

gulp.task("jest", (cb) => {
    jest(BUILD_OPTIONS)(cb);
});

gulp.task("default", gulp.series("clean", "build", (cb) => cb()));
gulp.task("start", gulp.series("default", "serve"), (cb) => cb());

