function isPrime( Num: number ) : number
{
    let res : number = 1;
    let i : number =0;

    for( i = 2; i< Num/2; i++ )
    {
        if( (Num % i) == 0 )
            res = 0;
    }

   return res;
}
var No : number = 11;
var No1 : number = 79;
var No3 : number = 36;

var Ret : number;

Ret = isPrime( No );
if( Ret == 1 )
    console.log("Number is Prime" + No );

Ret = isPrime( No1 );
if( Ret == 1 )
    console.log("Number is Prime" + No1 );

Ret = isPrime( No3 );
if( Ret == 1 )
    console.log("Number is Prime" + No3 );