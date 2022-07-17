module.exports = {
  extends: [
    "react-app",
    "react-app/jest"
  ],
  settings: {
    next: {
      rootDir: [ "apps/*/", "packages/*/" ],
    },
  },
  rules: {
    "indent": [
      "warn",
      2
    ],
    "object-curly-spacing": [
        "warn",
        "always"
    ],
    semi: [
      "error",
      "always"
    ],
    "jsx-a11y/anchor-is-valid": [ "off" ],
    quotes: [
        "warn",
        "double"
    ]
  },
};
