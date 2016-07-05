import buble from 'rollup-plugin-buble';
import stub from 'rollup-plugin-stub';

export default {
  entry: './quicksort-test.js',
  format: 'cjs',
  plugins: [ buble(), stub() ],
  dest: './test/index.js'
};
