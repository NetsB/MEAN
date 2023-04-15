var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(Data) {
        //It is compulsory to call Super here.
        return _super.call(this, Data) || this;
    }
    CircleX.prototype.CalculateCircumference = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    };
    return CircleX;
}(Circle));
var Obj1 = new CircleX(11.4);
var area = 0;
var Ret = 0;
console.log("Circle1 Radius = " + Obj1.Radius);
area = Obj1.CalculateArea();
console.log("Circle1 Area = " + area);
Ret = Obj1.CalculateCircumference();
console.log("Circle1  Circumference : " + Ret);
var Obj2 = new CircleX(35.3);
Ret = Obj2.CalculateArea();
console.log(" ");
console.log("Circle2 Radius = " + Obj2.Radius);
console.log("Circle2 Area : " + Ret);
Ret = Obj2.CalculateCircumference();
console.log("Circle2 Circumference : " + Ret);
