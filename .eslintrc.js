module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules":   {
    "react/jsx-filename-extension":      [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export":      "off",
    "key-spacing":                       "off",
    "arrow-body-style":                  "off",
    "react/forbid-prop-types":           "off",
    "import/no-extraneous-dependencies": "off",
  }
};