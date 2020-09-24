const navLinkElements: HTMLAnchorElement[] = Array.from(document.querySelectorAll('.nav-link'));
const test = 'kees';

// tuple array (array met fixed size)
const test2: [number, string, boolean] = [3, 'test', false];

navLinkElements.forEach(navLinkElement => {
	navLinkElement.addEventListener('click', (e: MouseEvent) => console.log(e));
});

const numberToAccountingString = (number: number): string | undefined => number !== null ? number < 0 ? `(${Math.abs(number)})` : number.toString() : undefined;

console.log(numberToAccountingString(-5));
console.log(numberToAccountingString(5));

interface User {
	id: number;
	name: string;
}

const user: User = {id: 1, name: 'kees'};

const testFunction = (type: 'kees' | 'brand') => {
	console.log(type);
};

testFunction('kees');