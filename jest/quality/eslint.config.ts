import { Config } from '@jest/types';

const config: Config.InitialOptions = {
    runner: "jest-runner-eslint",
    displayName: "lint:javascript",
    rootDir: "../..",
    moduleFileExtensions: ["ts", "tsx"],
    testMatch: [
        "<rootDir>/src/**/*.ts",
        "<rootDir>/src/**/*.tsx"
    ],
    preprocessorIgnorePatterns: [

    ]
}

export {
    config as default,
}
