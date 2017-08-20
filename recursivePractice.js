//Write a JavaScript program to get the integers in range (x, y)
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

function range(x,y) {
  var newArr = [];
  if(newArr.length === (y - 1) - x) {
    return newArr;
  }
  newArr.push(x + 1)
  return newArr.concat(range(x+1, y))
}

// Recursive sum
// sumRecursive([1, 2, 3, 4, 5, 6]) === 21

function sumRecursive(arr) {
  var sum = 0;
  if(arr.length === 0)  {
    return sum;
  }
  else  {
    return arr[0] + sumRecursive(arr.slice(1))
  }
}

// Binary Search

function binarySearch(arr, num) {
  if(arr.length === 0)  {
    return false;
  }
  if(arr[0] === num)  {
    return "There is a " + num + ' in the array!'
  }
  else  {
    return binarySearch(arr.slice(1), num)
  }
}


//string reversal

function reverse(str) {
  if(str.length === 0)  {
    return str;
  }
  return reverse(str.slice(1)) + str[0]
}



