function printFionacciSeries( Num: number ) : void
{
    let backupNum : number = Num;
    let start : number = 1;
    let prev_start : number = 0;

    let sum : number = 0;
    while( sum <= Num )
    {
        console.log ( prev_start );
        sum = prev_start + start;
        prev_start = start;
        start = sum;        
    }
    console.log( backupNum );
}

var Num1 : number = 21;
printFionacciSeries ( Num1 );
