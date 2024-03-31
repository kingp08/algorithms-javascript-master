// https://en.wikipedia.org/wiki/Insertion_sort

let insertionSort = (arr) => {
  let u, // unsorted
      s, // sorted
      value

  for (u = 1; u < arr.length; u++) {
    value = arr[u]

    for (s = u - 1; s >= 0 && arr[s] > value; s--) {
      arr[s + 1] = arr[s]
    }
    
    arr[s + 1] = value
  }
  return arr
}

module.exports = insertionSort

const test = require('tape')

test('Insertion sort', assert => {
  assert.deepEqual(insertionSort([2, 4, 6, 5, 1, 3]), [1, 2, 3, 4, 5, 6])
  assert.deepEqual([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])
  assert.deepEqual(insertionSort([-2, 4, 6, -5, 1, 3]), [-5, -2, 1, 3, 4, 6])
  assert.deepEqual(insertionSort([40, 12, 5, 34, 8, 35]), [5, 8, 12, 34, 35, 40])
  assert.end()
})
