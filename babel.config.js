module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@/shared": "./src/shared",
          "@/entities": "./src/entities",
          "@/features": "./src/features",
          "@/widgets": "./src/widgets",
          "@/pages": "./src/pages",
          "@/app": "./src/app",
        },
      },
    ],
    [
      "module:react-native-dotenv", 
        {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": ".env",
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }
    ]
  ],
};
