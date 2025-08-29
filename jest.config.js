module.exports = {
    preset: "jest-expo",
    transformIgnorePatterns: [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)"
    ],
    moduleNameMapper: {
      '^@expo/metro-runtime$': '<rootDir>/__mocks__/@expo/metro-runtime.js',
    },
    collectCoverage: true,
    collectCoverageFrom: [
      "**/*.{ts,tsx,js,jsx}",
      "!**/coverage/**",
      "!**/node_modules/**",
      "!**/babel.config.js",
      "!**/jest.config.js",
      "!**/expo-env.d.ts",
      "!**/.expo/**"
    ],
    coverageReporters: [ "json-summary", "text", "cobertura" ]
};