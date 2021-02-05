export { Config } from '@jest/types'
const config = {
    runner: "jest-runner-eslint",
    displayName: "lint:javascript",
    rootDir: "../..",
    moduleFileExtensions: ["ts", "tsx"],
    "testMatch": [
        "<rootDir>/src/**/*.ts",
        "<rootDir>/src/**/*.tsx"
    ]
}

export {
    config as default,
}
