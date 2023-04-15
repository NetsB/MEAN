class Circle
{
    Radius : number;
    PI : number;

    constructor( Data : number, PI : number = 3.14 )
    {
        this.Radius = Data;
        this.PI = PI;
    }
    CalculateArea() : number
    {
        let Ans : number = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    }
}

class CircleX extends Circle
{
    constructor( Data : number )
    {
        //It is compulsory to call Super here.
        super( Data );
    }
    CalculateCircumference() : number
    {
        let Ans : number = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    }
}

var Obj1 = new CircleX( 11.4 );
var area : number =0;
var Ret : number  = 0;

console.log("Circle1 Radius = " + Obj1.Radius );
area = Obj1.CalculateArea();
console.log("Circle1 Area = " + area );

Ret = Obj1.CalculateCircumference();
console.log("Circle1  Circumference : " + Ret );

var Obj2 = new CircleX( 35.3 );
Ret = Obj2.CalculateArea();

console.log(" ");
console.log("Circle2 Radius = " + Obj2.Radius );
console.log("Circle2 Area : " + Ret );
Ret = Obj2.CalculateCircumference();
console.log("Circle2 Circumference : " + Ret );
