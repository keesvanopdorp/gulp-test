const navLinkElements: HTMLAnchorElement[] = Array.from(document.querySelectorAll('.nav-link'));

navLinkElements.forEach(navLinkElement => {
	navLinkElement.addEventListener('click', (e: MouseEvent) => console.log(e));
});

const numberToAccountingString = (number: number): string | undefined => number !== null ? number < 0 ? `(${Math.abs(number)})` : number.toString() : undefined;

console.log(numberToAccountingString(-5));
console.log(numberToAccountingString(5));
