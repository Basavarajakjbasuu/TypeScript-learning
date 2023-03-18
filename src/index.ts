/******************************************
 * ADVANCED TYPES
 ******************************************/

/*
  1. Aliases
  2. Unions and intersection
  3. Type narrowing
  4. Nullable 
  5. Unknown
  6. NeverS
 */

/**
 * ALIASES - Define custom types can re-use multiple times
 */

type Employee = {
	id: number;
	name: string;
	retire: (date: Date) => void;
};

let employee2: Employee = {
	id: 1,
	name: 'Shreyas',
	retire: (date: Date) => {
		console.log(date);
	},
};

let employee3: Employee = {
	id: 2,
	name: 'Sham',
	retire: (date: Date) => {
		console.log(date);
	},
};

/**
 * UNION -
 */

function kgToLbs(weight: number | string): number {
	// type narrowing
	if (typeof weight === 'number') return weight * 2.2;
	else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('20');

/**
 * INTERSECTION
 */

type Draggable = {
	Drag: () => void;
};

type Resizable = {
	Resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
	Drag: () => {},
	Resize: () => {},
};

/**
 * LITERAL - exact or specific
 */

type Quantity = 50 | 100;

let quantity: Quantity = 50;
// let quantity1:Quantity = 10 => error not assignable

type Metric = 'cm' | 'inch';

/**
 * Nullish Coalescing Operator ??
 */

let speed: number | null = null;

let ride = {
	// if truthy then use speed or if it falsy use 30
	//falsy (undefined, null, false, 0, '')
	//if speed == 0 then use 30
	// speed: speed || 30,

	speed: speed ?? 30,
};

/**
 * ASSERSTIONS
 */

let phone = document.getElementById('phone') as HTMLInputElement;
let phone1 = <HTMLInputElement>document.getElementById('phone');

//HTMLElement - class tht contain any kind HTML elements
//HTMLInputElement - specific

phone.value;


/**
 * Unknown - type
 */