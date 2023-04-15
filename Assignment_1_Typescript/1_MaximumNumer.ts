/*Write a function to find maximum Number among the three */

function Maximum ( Num1 : number, Num2 : number, Num3 : number ) : number
{
    let maxNum : number = 0;
    if( Num1 > Num2 )
    {
        if( Num1 > Num3 )
        {
            maxNum = Num1;
        }
        else
        {
            maxNum = Num3;
        }
    }
    else if( Num2 > Num3 )
    {
        maxNum = Num2;
    }
    else
        maxNum = Num3;

    return maxNum;
}

var No1 : number = 23 , No2 :number = 89, No3 : number = 6;

var Ret :number = 0;

Ret = Maximum( No1, No2,No3);
console.log("Numbers are No1 = " + No1 + " No2 = " + No2 + " No3 = " + No3 );
console.log("Maximum Number among the three is : " + Ret );
