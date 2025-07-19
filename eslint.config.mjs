/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    "next/core-web-vitals"
  ],
  rules: {
    "react/no-unescaped-entities": "off"
  }
};

export default config;