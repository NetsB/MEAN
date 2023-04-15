/* Find Sum of array elements. */
function sumOfArray(Arr) {
    var sum = 0;
    var i = 0;
    for (i = 0; i < Arr.length; i++) {
        sum = sum + Arr[i];
    }
    return sum;
}
var numArr = [23, 6, 7, 4, 5, 7];
var arrSum = 0;
arrSum = sumOfArray(numArr);
console.log("Sum of all elements in Array is : " + arrSum);
