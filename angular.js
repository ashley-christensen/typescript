var count = 5;
count = 'a';
var a;
var b;
var c;
var d;
var e = [1, 2, 3]; //array of numbers
var g = [1, true];
//enum into container
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
