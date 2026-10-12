const { getDefaultConfig } = require('expo/metro-config');

const { transformer } = getDefaultConfig(__dirname);

console.log('transformer config:', {
  reanimatedVersion: transformer.reanimatedVersion,
  workletsVersion: transformer.workletsVersion,
  enableBabelRuntime: transformer.enableBabelRuntime,
});
console.log('installed:', {
  'react-native-reanimated': require('react-native-reanimated/package.json').version,
  'react-native-worklets': require('react-native-worklets/package.json').version,
  '@babel/runtime': require('@babel/runtime/package.json').version,
});
