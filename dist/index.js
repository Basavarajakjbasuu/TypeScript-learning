"use strict";
let employee2 = {
    id: 1,
    name: 'Shreyas',
    retire: (date) => {
        console.log(date);
    },
};
let employee3 = {
    id: 2,
    name: 'Sham',
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
//# sourceMappingURL=index.js.map