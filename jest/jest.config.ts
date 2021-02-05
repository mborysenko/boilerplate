import { Config } from '@jest/types';

const config: Config.InitialOptions = {
    rootDir: '../',
    projects: [
        // '<rootDir>/quality/eslint.config.ts',
        // '<rootDir>/quality/stylelint.config.ts',
        '<rootDir>/jest/extensions/explorer.config.ts'
    ]
}


export {
    config as default,
}
