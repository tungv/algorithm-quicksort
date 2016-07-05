import buble from 'rollup-plugin-buble';
import stub from 'rollup-plugin-stub';

export default {
  entry: './reverse-string-test.js',
  format: 'cjs',
  plugins: [ buble(), stub() ],
  dest: './test/index.js'
};
