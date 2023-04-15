/* Find Second largest element in the array. */

function secondLargestInArray( Arr : number[] ) : number
{
    let maxElement : number = 0;
    let temp : number = 0;
    let i : number = 0, j : number = 0;

    for( i=0; i < Arr.length-1; i++ )
    { 
        for( j = i+1; j < Arr.length; j++ )
        {
            if( Arr[i] > Arr[j] )
            {
                temp = Arr[i];
                Arr[i] = Arr[j];
                Arr[j] = temp;
            }
        }
    }
    maxElement = Arr[Arr.length-2];
    return maxElement;
}
function printArray( arr : number[] ) : void 
{
    let i : number = 0;

    for( i=0; i < arr.length; i++ )
    {
        console.log( arr[i] );
    }
}

var numArr : number[] = [23,89,6,29,56,45,77,32 ];
var arrSum : number = 0;

arrSum = secondLargestInArray( numArr );

console.log( "Second Largest Element in Array is : " + arrSum );
printArray( numArr );