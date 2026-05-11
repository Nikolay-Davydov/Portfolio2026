/**
 * ESLint flat config (eslint.config.cjs) for ESLint v9+.
 * - Loads Next.js base config
 * - Adds TypeScript parser/plugin for .ts/.tsx files
 */
module.exports = [
  // Include Next.js provided configs (spread to avoid nested-array)
  ...require("eslint-config-next"),

  // TypeScript-aware rules for TS/TSX files only
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {},
  },

  // Plain JS/JSX files (no TS project parser)
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {},
  },
];
