var Arithmetic = /** @class */ (function () {
    function Arithmetic(N1, N2) {
        this.Number1 = N1;
        this.Number2 = N2;
    }
    Arithmetic.prototype.Addition = function () {
        var Ret;
        console.log(" No1 : " + this.Number1);
        console.log(" No2 : " + this.Number2);
        Ret = this.Number1 + this.Number2;
        return Ret;
    };
    Arithmetic.prototype.Substraction = function () {
        var Ret;
        console.log(" No1 : " + this.Number1);
        console.log(" No2 : " + this.Number2);
        Ret = this.Number1 - this.Number2;
        return Ret;
    };
    Arithmetic.prototype.Multification = function () {
        var Ret;
        console.log(" No1 : " + this.Number1);
        console.log(" No2 : " + this.Number2);
        Ret = this.Number1 * this.Number2;
        return Ret;
    };
    Arithmetic.prototype.Division = function () {
        var Ret;
        console.log(" No1 : " + this.Number1);
        console.log(" No2 : " + this.Number2);
        if (this.Number2 != 0) {
            Ret = this.Number1 / this.Number2;
        }
        else {
            Ret = -1;
        }
        return Ret;
    };
    return Arithmetic;
}());
var Obj1 = new Arithmetic(25, 5);
var Obj2 = new Arithmetic(110, 23);
var Ret = 0;
Ret = Obj1.Addition();
console.log("Obj1 Addition : " + Ret);
Ret = Obj1.Substraction();
console.log("Obj1 Substraction : " + Ret);
Ret = Obj1.Multification();
console.log("Obj1 Multification : " + Ret);
Ret = Obj1.Division();
if (Ret != -1)
    console.log("Obj1 Division : " + Ret);
else
    console.log('Obj1 division : divide by Zero error');
Ret = Obj2.Addition();
console.log("Obj2 Addition : " + Ret);
Ret = Obj2.Substraction();
console.log("Obj2 Substraction : " + Ret);
Ret = Obj2.Multification();
console.log("Obj2 Multification : " + Ret);
Ret = Obj2.Division();
if (Ret != -1)
    console.log("Obj2 Division : " + Ret);
else
    console.log('Obj1 division : divide by Zero error');
