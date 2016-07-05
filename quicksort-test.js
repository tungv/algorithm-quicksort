import quicksort, { stub_counter, counter } from './quicksort';
import { assert } from 'chai';
import { range, random, sortBy } from 'lodash';

const getRandomArray = count => range(0, count).map(() => random(-1000, 1000, true));
describe('quicksort', () => {
  it('#t1', () => {
    const unsorted = [3, 4, 1, 2, 5, 5, 1, 2, 3, -10, 100, 20];
    const expected = [-10, 1, 1, 2, 2, 3, 3, 4, 5, 5, 20, 100];

    stub_counter(0);
    const actual = quicksort(unsorted);
    console.log('actual', actual);
    assert.deepEqual(actual, expected);
    console.log(`loop = ${ counter }`);
  });

  it('#random test (n=100)', () => {
    const unsorted = getRandomArray(100);
    const expected = sortBy(unsorted);

    stub_counter(0);
    const actual = quicksort(unsorted);
    // console.log('actual', actual);
    assert.deepEqual(actual, expected);
    console.log(`loop = ${ counter }`);
  });

  it('#random test (n=1000)', () => {
    const unsorted = getRandomArray(1000);
    const expected = sortBy(unsorted);

    stub_counter(0);
    const actual = quicksort(unsorted);
    // console.log('actual', actual);
    assert.deepEqual(actual, expected);
    console.log(`loop = ${ counter }`);
  });

  it('#random test (n=10000)', () => {
    const unsorted = getRandomArray(10000);
    const expected = sortBy(unsorted);

    stub_counter(0);
    const actual = quicksort(unsorted);
    // console.log('actual', actual);
    assert.deepEqual(actual, expected);
    console.log(`loop = ${ counter }`);
  });
});
