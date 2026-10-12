# `getDefaultConfig` reads `reanimatedVersion` and `workletsVersion` as `null`

A blank `create-expo-app` project with `npx expo install react-native-reanimated react-native-worklets`.

```sh
npm install
node print-transformer-versions.js
```

`getDefaultConfig(projectRoot).transformer` should carry the installed versions, which Metro's transform cache key includes so that a Reanimated or Worklets upgrade invalidates transforms made by the previous Babel plugin. It prints:

```
transformer config: { reanimatedVersion: null, workletsVersion: null, enableBabelRuntime: undefined }
installed: { 'react-native-reanimated': '4.5.1', 'react-native-worklets': '0.10.1', '@babel/runtime': '7.29.10' }
```
