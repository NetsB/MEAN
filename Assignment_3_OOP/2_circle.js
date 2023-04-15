var Circle = /** @class */ (function () {
    function Circle(Data, PI) {
        if (PI === void 0) { PI = 3.14; }
        this.Radius = Data;
        this.PI = PI;
    }
    Circle.prototype.CalculateArea = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var Obj1 = new Circle(10.7);
var area = 0;
area = Obj1.CalculateArea();
console.log("Area = " + area);
var Obj2 = new Circle(25.3);
var Ret = 0;
area = Obj1.CalculateArea();
console.log("Obj1 Area = " + area);
area = Obj2.CalculateArea();
console.log("Obj2 Area = " + area);
