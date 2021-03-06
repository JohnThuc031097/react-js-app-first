module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "react-app",
        "react-app/jest",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "no-unused-vars": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "off"
    }
};
