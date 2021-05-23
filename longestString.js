// TODO: Write a function that accepts an array of strings. Return the longest string in the array.
function largestString(strArr) { // the function largestString will accept an array of strings
	return strArr.reduce (function (prev, current)                // this return statement returns the longest string in the array. Using reduce function gives o(n) complexity.                                                        
                 {
                  return prev.length > current.length ? prev : current;   // if the previous element in the array is greater than current element than 
                                                                          // prev is returned otherwise current is returned
                 });
}
