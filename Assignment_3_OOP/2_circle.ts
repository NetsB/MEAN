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


var Obj1 = new Circle( 10.7);
var area : number =0;

area = Obj1.CalculateArea();
console.log("Area = " + area );

var Obj2 = new Circle( 25.3 );
var Ret : number  = 0;

area = Obj1.CalculateArea();
console.log("Obj1 Area = " + area );

area = Obj2.CalculateArea();
console.log("Obj2 Area = " + area );
