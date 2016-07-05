export let counter = 0;

export default function quicksort (array) {
  counter++;
  const length = array.length;
  if (length <= 1) {
    return array;
  }

  const medianIndex = ~~(length / 2);
  const median = array[medianIndex];

  const piles = piling(array, median);

  return [
    ...(piles.lower.length > 1 ? quicksort(piles.lower) : piles.lower),
    ...piles.median,
    ...(piles.upper.length > 1 ? quicksort(piles.upper) : piles.upper)
  ];
}

const piling = (array, median) => array.reduce((acc, current) => {
  if (current === median) {
    return {
      ...acc,
      median: [...acc.median, current]
    };
  }
  if (current > median) {
    return {
      ...acc,
      upper: [...acc.upper, current]
    };
  }

  return {
    ...acc,
    lower: [current, ...acc.lower]
  };
}, { lower: [], median: [], upper: [] });
