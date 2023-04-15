/* Find Maximum among the array. */

function ArrayMaximum( Arr : number[] ) : number
{
    let maxElement : number = 0;
    let i : number = 0;

    maxElement = Arr[0];
    for( i=0; i < Arr.length; i++ )
    { 
        if( maxElement < Arr[i] )
        {
            maxElement = Arr[i];
        }
    }
    return maxElement;
}

var numArr : number[] = [23,89,6,29,56,45,77,32 ];
var maxNum : number = 0;

maxNum = ArrayMaximum( numArr );
console.log( " Maximum Array element in this array is : " + maxNum );

