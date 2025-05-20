import eslint from "@eslint/js";
// import pluginCypress from "eslint-plugin-cypress/flat";
// import pluginChaiFriendly from "eslint-plugin-chai-friendly";
// import pluginMocha from "eslint-plugin-mocha";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["**/bundle*/", "**/lib/", "**/node_modules/**"],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  // pluginMocha.configs.flat.recommended,
  // pluginCypress.configs.recommended,
  // pluginChaiFriendly.configs.recommendedFlat,
  {
    // plugins: {
    //   cypress: pluginCypress,
    // },
    rules: {
      // "cypress/no-unnecessary-waiting": "error",
      // "cypress/unsafe-to-chain-command": "error",
      // "mocha/no-mocha-arrows": "off",
      "no-extra-boolean-cast": "warn",
      "prefer-const": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/member-ordering": "warn",
    },
  }
);
