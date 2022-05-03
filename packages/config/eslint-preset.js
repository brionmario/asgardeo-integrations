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
    "quotes": [
        "warn",
        "double"
    ]
  },
};
