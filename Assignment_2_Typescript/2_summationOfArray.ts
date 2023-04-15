/* Find Sum of array elements. */

function sumOfArray( Arr : number[] ) : number
{
    let sum : number = 0;
    let i : number = 0;

    for( i=0; i < Arr.length; i++ )
    { 
        sum = sum + Arr[i];    
    }
    return sum;
}

var numArr : number[] = [23,6,7,4,5,7 ];
var arrSum : number = 0;

arrSum = sumOfArray( numArr );
console.log( "Sum of all elements in Array is : " + arrSum );
