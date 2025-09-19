/** @type {import("prettier").Config} */
export default {
  // Plugins
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],

  // Core style rules
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 100,
  tabWidth: 2,

  // File-specific overrides
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
  ],
};
