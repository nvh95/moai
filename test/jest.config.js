/* eslint-env node */

// https://jestjs.io/docs/configuration
module.exports = {
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/src/config/jest-setup.js"],
	resetMocks: true,
	restoreMocks: true,
	transform: {
		"^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
		"^.+\\.(css|scss|sass)$": "jest-preview/transforms/css",
		"^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
			"jest-preview/transforms/file",
	},
	collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
};
