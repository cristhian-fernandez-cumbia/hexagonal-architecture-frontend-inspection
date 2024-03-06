/* eslint-disable no-undef */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@faker-js/faker$': '<rootDir>/node_modules/@faker-js/faker'
    }
};