const navLinkElements: HTMLAnchorElement[] = Array.from(document.querySelectorAll('.nav-link'));


// tuple array (array met fixed size)
const test2: [number, string, boolean] = [3, 'test', false];

navLinkElements.forEach(navLinkElement => {
	navLinkElement.addEventListener('click', (e: MouseEvent) => console.log(e));
});

const numberToAccountingString = (number: number): string | undefined => number !== null ? number < 0 ? `(${Math.abs(number)})` : number.toString() : undefined;

console.log(numberToAccountingString(-5));
console.log(numberToAccountingString(5));


const testFunction = (type: 'kees' | 'brand') => {
	console.log(type);
};

testFunction('kees');