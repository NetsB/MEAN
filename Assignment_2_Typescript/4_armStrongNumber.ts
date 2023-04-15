function checkArmStrong( Num : number ) : number
{
    var isArmstrong : number;
    var prev : number = Num;
    var sum : number = 0;
    var rem : number = 0;

    while( prev != 0 )
    {
        rem = prev % 10;
        console.log( "rem = " + rem);
        sum = sum + ( rem * rem * rem );
        console.log( "sum = " + sum );
        prev = Math.floor( prev / 10);
    }
    console.log( "sum = " + sum );

    if( sum == Num )
    {
        isArmstrong = 1;
    }
    else 
    {
        isArmstrong = 0;
    }
    return isArmstrong;
}
var No1 : number = 153;
var No2 : number = 120;

var Ret : number;

Ret = checkArmStrong( No1 );
if( Ret == 1 )
    console.log("Number is ArmStrong ");
else
    console.log("Number is NOT ArmStrong ");
