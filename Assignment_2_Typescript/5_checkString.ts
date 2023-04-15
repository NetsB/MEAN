/* Check sustring */

function checkSubstring( str: string, substr : string ) : void
{
    let Ret : number = 0;
    const res = str.search( substr );

    console.log ("Substrin present at letter place " + res );
}

var myString : string = "Pune Kothrud Marvellous InfoSystems";
var substr : string = "Marvellous";

checkSubstring( myString, substr );