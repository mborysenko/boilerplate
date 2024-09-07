import { run } from 'jest-cli';
import { Configuration } from "../../configuration";

/**
 * Run Jest unit tests.
 * @module jest
 * @param {Object} options Build properties.
 */
export const test = (options: Configuration, callback?: (error?: Error) => void) => {
    const {
        jest,
    } = options;
    run([], jest.configFile)
        .then(() => {
            callback?.();
        })
        .catch((error) => {
            callback?.(error);
        });
};
