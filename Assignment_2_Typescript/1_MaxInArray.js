/* Find Maximum among the array. */
function ArrayMaximum(Arr) {
    var maxElement = 0;
    var i = 0;
    maxElement = Arr[0];
    for (i = 0; i < Arr.length; i++) {
        if (maxElement < Arr[i]) {
            maxElement = Arr[i];
        }
    }
    return maxElement;
}
var numArr = [23, 89, 6, 29, 56, 45, 77, 32];
var maxNum = 0;
maxNum = ArrayMaximum(numArr);
console.log(" Maximum Array element in this array is : " + maxNum);
