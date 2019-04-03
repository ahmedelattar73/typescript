var a = 10;
console.log(a);
var b = "Hello";
console.log(b);
var c = true;
console.log(c);
var d = "any";
console.log(d);
var e = [1, 3, 99];
console.log(e);
var f = [33, "ahmed", true];
console.log(f);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var bgColor = Color.blue;
console.log(bgColor);
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 1] = "red";
    Color2[Color2["green"] = 2] = "green";
    Color2[Color2["blue"] = 3] = "blue";
})(Color2 || (Color2 = {}));
var bgColor2 = Color2.blue;
console.log(bgColor2);
// Type Assrtions.
var message = 'abc';
var endWithC = message.endsWith('c');
var endWithC2 = message.endsWith('c');
