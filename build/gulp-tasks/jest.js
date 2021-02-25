import {run} from 'jest-cli';

/**
 * Run Jest unit tests.
 * @module jest
 * @param {Object} props Build properties.
 */
export default function (props) {
    const {
        jest,
    } = props;
    return (done) => {
        run([], jest.configFile)
            .then(() => {
                done?.();
            })
            .catch((error) => {
                done?.(error);
            });
    }
};
