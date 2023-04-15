function CalculateArea(Radius, PI) {
    var area = 0;
    if (PI == undefined) {
        PI = 3.14;
    }
    area = PI * Radius * Radius;
    return area;
}
var radius = 5;
var PI = 0;
var circleArea = 0;
circleArea = CalculateArea(radius);
console.log('Area of Circle with radius ' + radius + ' = ' + circleArea);
