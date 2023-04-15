function isPrime(Num) {
    var res = 1;
    var i = 0;
    for (i = 2; i < Num / 2; i++) {
        if ((Num % i) == 0)
            res = 0;
    }
    return res;
}
var No = 11;
var No1 = 79;
var No3 = 36;
var Ret;
Ret = isPrime(No);
if (Ret == 1)
    console.log("Number is Prime" + No);
Ret = isPrime(No1);
if (Ret == 1)
    console.log("Number is Prime" + No1);
Ret = isPrime(No3);
if (Ret == 1)
    console.log("Number is Prime" + No3);
