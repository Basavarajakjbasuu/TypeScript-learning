"use strict";
console.log('Hello world!');
let age = 20;
let sales = 12434890;
let course = 'Typescript';
let isPublished = true;
function newTopic(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
numbers.forEach((n) => n.toString());
console.log(numbers);
let user = [2, 'Bassu'];
user[0].toFixed();
user[1].charAt(1);
var Size;
(function (Size) {
    Size["Small"] = "S";
    Size["Medium"] = "M";
    Size["Large"] = "L";
})(Size || (Size = {}));
let mySize = Size.Large;
console.log(mySize);
function calculateTax(income, taxYear = 2023) {
    if (taxYear < 2023)
        return income * 1.5;
    return income * 1.2;
}
calculateTax(17000, 2022);
let employee = { id: 1, name: 'Ram' };
//# sourceMappingURL=index.js.map