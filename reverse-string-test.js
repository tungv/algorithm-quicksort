import reverse from './reverse-string';
import { assert } from 'chai';

describe('reverse-string', () => {
  it('#t1', () => {
    const actual = reverse('this is a string');
    assert.equal('gnirts a si siht', actual);
  });
});
