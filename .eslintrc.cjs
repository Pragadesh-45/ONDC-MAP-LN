module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:svelte/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"],
  },
  env: {
    es6: true,
    browser: true,
  },
  // ignore the node_modules folder and all the root-level .ts, .js and .cjs files because the custom eslint parser

overrides: [
    {
      files: ["*.svelte"],
      // files: ["./demo/**/*.{ts,js,cjs,svelte}", "./src/**/*.{ts,js,cjs,svelte}"],
      parser: "svelte-eslint-parser",
      // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "svelte/valid-compile": "off",
      },
    },
  ],
  // doesn't know how to work with them for some reason and the stats.html file
  ignorePatterns: ["node_modules", "/*.ts", "/*.js", "/*.cjs", "/stats.html"],
};
