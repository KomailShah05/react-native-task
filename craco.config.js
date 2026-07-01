module.exports = {
  webpack: {
    alias: {
      "react-native": "react-native-web",
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^react-native$": "<rootDir>/node_modules/react-native-web",
      },
    },
  },
};
