module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    ".eslintrc.*",
    "vite.config.*",
    "postcss.config.js",
    "prettier.config.js",
    "tailwind.config.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "react-refresh",
    "tailwindcss",
    "simple-import-sort",
    "typescript-sort-keys",
    "sort-keys-fix",
    "sort-destructure-keys",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // Reactの明示的なインポートを不要にする
    "react/react-in-jsx-scope": "off",
    "import/extensions": [
      "error",
      {
        ignorePackages: true,
        pattern: {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
          json: "always",
        },
      },
    ],
    // スプレッド構文を許可
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-shadow": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
