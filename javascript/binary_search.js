function binarySearch(arr, target) {
  if (arr.length === 0) {
		return false;
	}

	const middle = Math.floor(arr.length / 2);
	const middle_value = arr[middle];

	if (middle_value === target) {
		return true;
	} else if (middle_value > target) {
		return binarySearch(arr.slice(0, middle), target);
	} else {
		return binarySearch(arr.slice(middle + 1), target);
	}
}

// BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
function binarySearchIndex(arr, target) {
	  if (binarySearch(arr, target)) {
			return arr.indexOf(target);
		} else {
			return -1;
		}
}

if (require.main === module) {
  // add your own tests in here
  // console.log("Expecting: true");
  // console.log("=>", binarySearch([1, 2, 3], 3));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", binarySearch([3, 5, 9], 10));

  // UNCOMMENT FOR BONUS
  console.log("");
  console.log("Expecting: 0");
  console.log("=>", binarySearchIndex([1, 2, 3], 1));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", binarySearchIndex([4, 7, 20], 100));

	console.log("");

  console.log("Expecting: 4");
  console.log("=>", binarySearchIndex([4, 7, 20, 100, 350, 400], 350));
}

module.exports = {
  binarySearch,
  binarySearchIndex
};

// Add a written explanation of your solution
