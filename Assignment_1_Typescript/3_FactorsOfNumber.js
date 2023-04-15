function CalculateFactors(Num) {
    var No = Num;
    var i = 1;
    while (i <= No) {
        while (1) {
            var rem = 0;
            rem = No % i;
            console.log(i + "  , ");
            No = No / i;
            i++;
            if (No == 0)
                break;
        }
    }
}
var Num = 0;
Num = 34;
CalculateFactors(Num);
