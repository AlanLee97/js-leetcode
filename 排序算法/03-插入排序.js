function insertSort(arr = []) {
  let selectedVal, preIndex;
  for (let i = 1; i < arr.length; i++) {
    selectedVal = arr[i];
    preIndex = i - 1;
    while (preIndex >= 0 && arr[preIndex] > selectedVal) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = selectedVal;
  }
  return arr;
}

let arr = [2, 4, 1, 3];
console.log('insertSort', insertSort(arr));