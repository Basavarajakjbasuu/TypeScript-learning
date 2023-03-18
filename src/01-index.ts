console.log('Hello world!');

let age: number = 20;

/**
 * Built In types of JS

      JS
    ------
  1. Number
  2. Boolean
  3. String
  4. null
  5. object
  6. undefined


      TS
    ------
  1. Number
  2. Boolean
  3. String
  4. null
  5. object
  6. undefined

  7.  Any
  8.  unknown
  9.  never
  10. enum
  11. every
 * 
 */

// Primitive type

let sales: number = 124_34_890;
let course: string = 'Typescript';
let isPublished: boolean = true;

// any
/**
 * If we don't no what will be the type but it is not recommended
 */
function newTopic(document: any) {
	console.log(document);
}

/**
 * ARRAYS
 */

let numbers: number[] = [1, 2, 3];

numbers.forEach((n) => n.toString());
console.log(numbers);

/**
 * TUPLES - Define each element in array have corresponding type
 */

// similar to array each element get corresponding type
//   Behind range will causes error

let user: [number, string] = [2, 'Bassu'];

// let user1: [number, string] = [2, 'Bassu', 23 ]; ==> gives Error

// code completion
user[0].toFixed();
user[1].charAt(1);

/**
 * ENUMS - define list of related constants with type
 */

// const small = 's';
// const medium = 'm';
// const large = 'l';

// PascalScale
enum Size {
	Small = 'S',
	Medium = 'M',
	Large = 'L',
}

let mySize: Size = Size.Large;

console.log(mySize);

/**----------------------------------------
 * FUNCTIONS
 *-----------------------------------------/

	/*
		> TS will properly annotate function with strict type checking of parameter and return type

			function funcName(parm1:type, parm2:type): return type{
				Func statement
			}

			return type - void if it didn't return anything
	*/

function calculateTax(income: number, taxYear = 2023): number {
	if (taxYear < 2023) return income * 1.5;
	return income * 1.2;
}

calculateTax(17_000, 2022);

/**
 * OBJECTS
 */

let employee1: {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
} = {
	id: 1,
	name: 'Ram',
	retire: (date: Date) => {
		console.log(date);
	},
};

// id cant edit its read only
