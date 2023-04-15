function CalculateArea ( Radius : number, PI? : number ) : number
{
    let area : number = 0;

    if( PI == undefined )
    {
        PI = 3.14 ;
    }
    area = PI * Radius * Radius;
    return area;
}

var radius : number = 5;
var PI : number = 0;
var circleArea : number = 0;

circleArea = CalculateArea( radius);
console.log( 'Area of Circle with radius ' + radius + ' = ' + circleArea );