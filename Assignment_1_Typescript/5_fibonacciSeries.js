function printFionacciSeries(Num) {
    var backupNum = Num;
    var start = 1;
    var prev_start = 0;
    var sum = 0;
    while (sum <= Num) {
        console.log(prev_start);
        sum = prev_start + start;
        prev_start = start;
        start = sum;
    }
    console.log(backupNum);
}
var Num1 = 21;
printFionacciSeries(Num1);
