"use strict";
const navLinkElements = Array.from(document.querySelectorAll('.nav-link'));
// tuple array (array met fixed size)
const test2 = [3, 'test', false];
navLinkElements.forEach(navLinkElement => {
    navLinkElement.addEventListener('click', (e) => console.log(e));
});
const numberToAccountingString = (number) => number !== null ? number < 0 ? `(${Math.abs(number)})` : number.toString() : undefined;
console.log(numberToAccountingString(-5));
console.log(numberToAccountingString(5));
const testFunction = (type) => {
    console.log(type);
};
testFunction('kees');
