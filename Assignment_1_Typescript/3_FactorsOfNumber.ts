function CalculateFactors( Num : number ) : void
{
    let No = Num;
    let i : number = 1;
    
    while( i <= No )
    {
        while( 1 )
        {
            let rem : number = 0;
            rem = No % i;
            console.log( i + "  , " );
            No = Math.floor ( No / i);
            i++;
            if( No == 0 )
            break;
            
        }
    }
}

var Num : number = 0;
Num = 34;

CalculateFactors( Num );
