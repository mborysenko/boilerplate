import { ESLint } from 'eslint';
import * as glob from 'glob';
import { type Configuration } from "../../configuration";

/**
 * Checks the code base corresponds to coding conventions.
 * @param {Object} options Build options.
 * @param fix defines should ESLint fix found problems if possible
 */
export const eslint = (options: Configuration, fix = false) => {
    const {eslint, projectDir} = options;

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
            const formatter = cli.loadFormatter('stylish')
                .then((formatter) => {
                    console.log(formatter.format(results, {
                        cwd: projectDir,
                        rulesMeta: {},
                    }));
                });
        })
        .catch((error) => {
            throw error;
        });
};
