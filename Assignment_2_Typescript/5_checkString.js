/* Check sustring */
function checkSubstring(str, substr) {
    var Ret;
    var res = str.search(substr);
    console.log(res);
}
var myString = "Pune Kothrud Marvellous InfoSystems";
var substr = "Marvellous";
checkSubstring(myString, substr);
