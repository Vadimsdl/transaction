import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import { ESLint } from "eslint";
import tsParser from "@typescript-eslint/parser";

export default new ESLint({
  baseConfig: {
    ignorePatterns: ["dist"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    env: {
      browser: true,
      es2020: true,
    },
    globals: {
      ...globals.browser,
      AudioWorkletGlobalScope: false,
    },
    plugins: ["react-hooks", "react-refresh", "@typescript-eslint"],
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
    files: ["**/*.{ts,tsx}"],
  },

}); 