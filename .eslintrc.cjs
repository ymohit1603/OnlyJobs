/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json", // Ensure this points to your TypeScript config file
    tsconfigRootDir: __dirname, // Resolves issues with monorepos or nested configs
    ecmaVersion: 2022,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked"
  ],
  rules: {
    /* TypeScript-Specific Rules */
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports"
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_", // Ignore unused arguments starting with `_`
        varsIgnorePattern: "^_", // Ignore unused variables starting with `_`
        caughtErrorsIgnorePattern: "^_" // Ignore unused catch clause variables
      }
    ],
    "import/no-anonymous-default-export": ["error", {
      "allowArray": false,
      "allowArrowFunction": false,
      "allowAnonymousClass": false,
      "allowAnonymousFunction": false,
      "allowCallExpression": true, 
      "allowNew": false,
      "allowLiteral": false,
      "allowObject": true
    }],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false
        }
      }
    ],
    /* Next.js and Core Web Vitals */
    "react/no-unescaped-entities": "off", // Disable warnings for unescaped characters in JSX
    "react-hooks/exhaustive-deps": "warn", // Ensure hooks have correct dependencies
    "react/jsx-key": "error" // Enforce keys in lists
  },
  ignorePatterns: [
    "node_modules",
    ".next",
    "dist",
    "build",
    "**/*.js" // Ignore plain JS files, if TypeScript is used exclusively
  ]
};

module.exports = config;
