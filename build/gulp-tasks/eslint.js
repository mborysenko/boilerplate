import { ESLint } from 'eslint';
import glob from 'glob';

/**
 * Checks the code base corresponds to coding conventions.
 * @param {Object} options Build options.
 * @param boolean Whether ESLinter should fix issue automatically if possible
 */
export default function (options, fix = false) {
    const { eslint, projectDir } = options;
    return (cb) => {
        const cli = new ESLint({
            cwd: projectDir,
            fixTypes: ['problem', 'layout'],
            overrideConfigFile: eslint.configFile,
            fix
        })

        const fileList = glob.sync(eslint.pattern, {
            cwd: projectDir,
        });

        cli.lintFiles(fileList)
            .then((results) => {
                const formatter = cli.loadFormatter('stylish').then((formatter) => {
                    console.log(formatter.format(results));
                });
                cb && cb();
            })
            .catch((error) => {
                cb && cb(error);
            });
    }
};
