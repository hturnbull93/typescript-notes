<!-- omit in toc -->
# TypeScript Notes

- [Installation](#installation)
- [Compilation](#compilation)
- [Types](#types)
  - [Any](#any)
  - [Inference](#inference)
  - [Built in types](#built-in-types)
- [Functions](#functions)
  - [Parameter types](#parameter-types)
  - [Return types](#return-types)
  - [Arrow functions](#arrow-functions)
  - [Contextual typing in anonymous functions](#contextual-typing-in-anonymous-functions)
- [Object types](#object-types)
  - [Optional properties](#optional-properties)
- [Union types](#union-types)
- [Type aliases](#type-aliases)
- [Type interfaces](#type-interfaces)
- [Type assertions](#type-assertions)
- [Literal types](#literal-types)
  - [Literal inference](#literal-inference)
- [`null` and `undefined`](#null-and-undefined)
  - [`strictNullChecks`](#strictnullchecks)
  - [Non-null assertion operator](#non-null-assertion-operator)
- [Enums](#enums)
  - [Numeric enums](#numeric-enums)
  - [String enums](#string-enums)
  - [Enums as unions](#enums-as-unions)
  - [Objects as an alternative](#objects-as-an-alternative)
- [Narrowing](#narrowing)
  - [Type guards](#type-guards)
  - [`instanceof` narrowing](#instanceof-narrowing)
  - [Type predicates](#type-predicates)

## Installation

Install TypeScript globally with: 

```shell
npm install -g typescript
```

In `first.ts`:

```ts
let a = 5;  
let b = 5;  
let c = a + b;

console.log(c); // 10
```

## Compilation

Compile TypeScript into JavaScript with:

```shell
tsc first.ts
```

The command can be used with regex/wildcards:

```shell
tsc *.ts
```

This is compiled in place to `first.js`, ES5 JavaScript:

```js
var a = 5;
var b = 5;
var c = a + b;
console.log(c); // 10
```

Compilation and live type checking behaviour can be configured by passing flags to the compiler when invoking through the commandline:

```shell
tsc --noEmitOnError willNotBeUpdated.ts
```

Or via a config file such as tsconfig.json:

```json
{
  "compilerOptions": {
    "noEmitOnError": true,
  }
}
```

[More on compilation and tooling](https://www.typescriptlang.org/docs/handbook/2/basic-types.html).

## Types

Type annotations are the bread and butter of TypeScript, and enforce what sort of values can appear and be used where.

[More on types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html).

### Any

The `any` type allows any type to be used:

```ts
let myVariable: any = 10;
myVariable = 'It can also be a string';
```
### Inference

The compiler will attempt to infer a type from the assigned value:

```ts
let anInferredString = 'hello world';
anInferredString = 10;
// Type 'number' is not assignable to type 'string'.
```

If the compiler cannot get the type from context, it will use the `any` type. The compiler flag [noImplicitAny](https://www.typescriptlang.org/tsconfig#noImplicitAny) can be used to restrict this.

### Built in types

Integers and floats are represented by the `number` type:

```ts
const age: number = 27;  
const decimal: number = 2.5;
```

The `string` type covers both regular and template literal strings:

```ts
const name: string = 'Harry';
const sentence: string = `${name} is ${age} years old`;
```

Booleans have the `boolean` type:

```ts
const isPresent: boolean = true;
```

Arrays can be represented by either the type contained:

```ts
const list: number[] = [1, 2, 3];
```

Or, using the generic `Array` type:

```ts
const animals: Array<string> = ['dog', 'cat', 'bird'];
```

Tuples are an aray with a fixed number of elements whose types are known:

```ts
const myTuple: [string, number] = ['cats', 2];
```

## Functions

### Parameter types

Parameters can have type annotations to enforce that the correct argument values are passed to the function:

```ts
function greet(name: string) {
  console.log(`Hello, ${name.toUpperCase()}!!`);
}
```

Given that the `toUpperCase` method will only work on strings, TypeScript protects from errors at runtime by preventing inappropriate arguments being passed to `greet`. such as numbers;

```ts
greet(10);
// Argument of type 'number' is not assignable to parameter of type 'string'.

greet('John');
// Hello, JOHN!!
```

The number of arguments will also be checked:

```ts
greet();
// Expected 1 arguments, but got 0.

greet('John', 'Alice');
// Expected 1 arguments, but got 2.
```

### Return types

The return type of a function can be specified:

```ts
function double(x: number): number {
  return x * 2;
}
```

The compiler will be able to tell what type the return value is.

```ts
const four: string = double(2);
// Type 'number' is not assignable to type 'string'.

const eight: number = double(4);
```

The compiler is also able to infer the return type, though annotation helps with internal documentation and maintenance of the function's public interface.

### Arrow functions

Arrow functions can also be annotated:

```ts
const square = (x: number): number => x * x;

const sixteen = square(4);
```

### Contextual typing in anonymous functions

The compiler can infer a type when the function appears in a place it can determine how it will be called:

```ts
const names = ["Alice", "Bob", "Eve"];

names.forEach(function (s) {
  console.log(s.toUppercase());
// Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
```

This also works for arrow functions too:

```ts
names.forEach((s) => {
  console.log(s.toUppercase());
// Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
```

## Object types

Other than primitives, most types are objects, which are described similarly to object descructuring:

```ts
const describePerson = (person: { firstName: string, age: number }) => {
  console.log(`${person.firstName} is ${person.age} years old`)
}

describePerson({ firstName: 'Bob', age: 35 });
// Bob is 35 years old
```

Properties can be separated with either `,` or `;`:

```ts
function printCoord(pt: { x: number; y: number }) {
  console.log(`The coordinate's position is x: ${pt.x}, y: ${pt.y}`);
}

printCoord({ x: 3, y: 7 });
// The coordinate's position is x: 3, y: 7
```

### Optional properties

Object properties with a `?` after the property name are optional. This does mean they need to be checked if they are undefined otherwise the code may error.

```ts
const greetPerson = (person: { firstName: string, lastName?: string }) => {
  if (person.lastName !== undefined) {
    console.log(`Hello, ${person.firstName.toUpperCase()} ${person.lastName.toUpperCase()}`)
  } else {
    console.log(`Hello, ${person.firstName.toUpperCase()}`)
  }
}

greetPerson({ firstName: "Alice" });
// Hello ALICE
greetPerson({ firstName: "Chris", lastName: 'Jenkins' });
// Hello CHRIS JENKINS
```

## Union types

Union types are formed of two or more of other types:

```ts
function printId(id: number | string) {
  console.log(`Your ID is: ${id}`);
}

printId(101);
// Your ID is: 101
printId("202");
// Your ID is: 202
```

In the instance where a union type needs to be treated differently based on the type it actually is, you must *narrow* the union:

```ts
function printIdUpperCase(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printIdUpperCase(123);
// 123
printIdUpperCase('abc');
// ABC
```

Unions of individual variables and arrays are a common pattern:

```ts
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler " + x);
  }
}

welcomePeople(['Jessie', 'Alistair']);
// Hello, Jessie and Alistair
welcomePeople('Steve');
//  Welcome lone traveler Steve
```

A union can effectively be used where the members have something in common, such as a method:

```ts
function printFirstThree(x: number[] | string) {
  console.log(x.slice(0, 3));
}

printFirstThree('three');
// thr
printFirstThree([1, 2, 3, 4, 5]);
// [1, 2, 3]
```

## Type aliases

To reuse types rather than writing them explicitly every time they occur, aliases can be defined to describe the shape of types in an object:

```ts
type Pet = {
  name: string;
  species: string;
}

function scold(pet: Pet) {
  console.log(`No ${pet.name}, bad ${pet.species}`);
}

function praise(pet: Pet) {
  console.log(`Good ${pet.species}, ${pet.name}`);
}

const spot: Pet = {
  name: 'Spot',
  species: 'dog',
};

praise(spot);
// Good dog, Spot
scold(spot);
// No Spot, bad dog
```

Aliases are not extensible, but new types can be constructed using existing types:

```ts
type Vehicle = {
  speed: number,
}

type Car = Vehicle & {
  make: string,
}

const beetle: Car = {
  speed: 60,
  make: 'Volkswagen',
};
```

## Type interfaces

Interfaces can be extended similar to class based inheritance:

```ts
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}
```

Or re-opened:

```ts
interface Bear {
  friends: string[],
}

const winnie: Bear = {
  name: 'Winnie the Pooh',
  honey: true,
  friends: ['Piglet'],
};
```

## Type assertions

In order to give TypeScript information that it can't possibly know about, you can assert the type at assignment:

```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

Alternatively, angle-bracket generic syntax can be used:
```ts
const secondaryCanvas = <HTMLCanvasElement>document.getElementById("secondary_canvas");
```

Type assertion can only be between more and less specific versions of a type, i.e. you could not generally coerce one primitive into another:

```ts
const x = 'hello' as number;
// Conversion of type 'string' to type 'number' may be a mistake
// because neither type sufficiently overlaps with the other. If
// this was intentional, convert the expression to 'unknown' first.
```

## Literal types

Literal types are useful when defining sets of options that must have certain values:

```ts
printInCase("Hello, world", "upper");
const printInCase = (s: string, caseToPrint?: "upper" | "lower") => {
  switch (caseToPrint) {
    case "upper":
      console.log(s.toUpperCase());
      break;
    case "lower":
      console.log(s.toLowerCase());
      break;
    default:
      console.log(s);
      break;
  }
};

printInCase("Hello, world", "upper");
// HELLO, WORLD
```

This can be used to mix types as well:

```ts
const greetPerson = (person: { firstName: string, lastName?: string } | 'unknown') => {
  if (person === 'unknown') {
    console.log('Hello, stranger');
  } else if (person.lastName !== undefined) {
    console.log(`Hello, ${person.firstName} ${person.lastName}`)
  } else {
    console.log(`Hello, ${person.firstName.toUpperCase()}`)
  }
}

greetPerson('unknown');
// Hello, stranger
greetPerson({ firstName: "Alice" });
// Hello, Alice
greetPerson({ firstName: "Chris", lastName: 'Jenkins' });
// Hello, Chris Jenkins
```

### Literal inference

Properties on objects are mutable, so are infered to be the type of the value they are assigned with, rather than the literal:

```ts
const mutableProperties = { one: 1 };
mutableProperties.one = 2;
```

To constrain the property to that literal value, either specify `as` for the properties themselves:

```ts
const immutableUsingAs = { one: 1 as 1 };
immutableUsingAs.one = 2
// Type '2' is not assignable to type '1'.
```

Or to convert the entire object to literals, specify the object `as const`:

```ts
const immutableUsingConst = { one: 1 } as const;
immutableUsingConst.one = 2;
// Cannot assign to 'one' because it is a read-only property.
```

## `null` and `undefined`

 `null` and `undefined` have types of the same name. 


### `strictNullChecks`

A value that could be `null` and `undefined` (for example with a union), can be accessed, even though it might be null or undefined.

With `strictNullChecks` on, narrowing must be used to guard against `null` and `undefined`

```ts
function checkForNull(x: string | undefined) {
  if (x === undefined) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

function noCheckForNull(x: string | undefined) {
    console.log("Hello, " + x.toUpperCase());
    // Object is possibly 'undefined'.
}
```

### Non-null assertion operator

To dangerously overide the checking, and assert that the value will not be `null` or `undefined`, use a `!` chaining operator:

```ts
function assertNonNull(x: string | undefined) {
  console.log("Hello, " + x!.toUpperCase());
}
```

## Enums

[More info on enums](https://www.typescriptlang.org/docs/handbook/enums.html).

TypeScript adds enums as a laguage feature (rather than simply typing javascript).

### Numeric enums

By default, enums are numeric, are initialised at 0, and increment through the members:

```ts
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right,  // 3
}
```

Enums can be initialised with values as well, which can be constant, or computed. Computed values have to come last:

```ts
const generateLast = () => Math.ceil(Math.random() * 10 + 3);

enum Codes {
  first = 1,              // 1, constant
  second,                 // 2
  third,                  // 3
  last = generateLast(),  // Integer between 4 and 13 inclusive, computed
}
```

Numeric enums get a reverse mapping, so it's easy to check the key:
```ts
const keyForSecond = Codes[2]; // 'second'
```

### String enums

String enums are easily serialised to make them human readable, but don't auto increment, nor do they have a reverse mapping:

```ts
enum Cardinals {
  north = "NORTH",
  east = "EAST",
  south = "SOUTH",
  west = "WEST",
}
```

### Enums as unions

Enums, when used to type, effectively become a union. The following are functionally the same, however the enum allows you to easily pass valid members:

```ts
const goInADirectionEnum = (direction: Cardinals) => {
  console.log(`Going: ${direction}`);
};

goInADirectionEnum(Cardinals.north);
// Going: NORTH

const goInADirectionUnion = (
  direction: "NORTH" | "EAST" | "SOUTH" | "WEST"
) => {
  console.log(`Going: ${direction}`);
};

goInADirectionUnion(Cardinals.north);
// Going: NORTH
```

### Objects as an alternative

An object with keys can be a sufficient alternative to enums, though it does take an extra line to prepare a type from the values:

```ts
const CardinalsObj = {
  north: "NORTH",
  east: "EAST",
  south: "SOUTH",
  west: "WEST",
} as const;

type ObjectCardinal = typeof CardinalsObj[keyof typeof CardinalsObj];

const goInADirectionObject = (direction: ObjectCardinal) => {
  console.log(`Going: ${direction}`);
};

goInADirectionObject(CardinalsObj.north);
```

## Narrowing

When functions are passed unions, the function needs to define control flow to handle each of the types the union could be:

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  } else {
    return padding + input;
  }
}

console.log(padLeft(2, "padded on the left"));
// "  padded on the left"
console.log(padLeft("hello", "world"));
// "helloworld"
```

### Type guards

Using `typeof` we can check the type of any value, which will return any of the following:

- `"string"`
- `"number"`
- `"bigint"`
- `"boolean"`
- `"symbol"`
- `"undefined"`
- `"object"`
- `"function"`

Note that `typeof null` is `"object"`, so guard against null with `value === null` before guarding against objects:

```ts
function printAll(strs: string | string[] | null) {
  if (strs === null) {
    console.log(strs);
  } else if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

printAll(["hello", "world"]);
// hello
// world
printAll("hey");
// hey
printAll(null);
// null
```

`null` and `undefined` coorce to false, so this guard could be combined withthe second by checking for truthiness of `strs`:

```ts
function printThese(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

printThese(["hello", "world"]);
// hello
// world
printThese("hey");
// hey
printThese(null);
// null
```

However, be wary that `0` and empty strings coerce to false, but you may want to accept handle their cases instead of treating them with `null` and `undefined`.

### `instanceof` narrowing

When passed a value that is an instance of something, `instanceof` can be used to check if the value is an instance of that thing, by checking up the prototype chain. This can essentially be used for anything that is creating with the `new` keyword:

```ts
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

logValue('hello there');
// HELLO THERE
logValue(new Date());
// Wed, 17 Mar 2021 21:49:51 GMT
```

### Type predicates

A predicate is a function that returns a boolean, which in this case can be used as a type guard. Consider the following classes and a function to get a pet:

```ts
class Fish {
  swim = (): void => {
    console.log("Swimming");
  };
}

class Bird {
  fly = (): void => {
    console.log("Flying");
  };
}

const getPet = (): Fish | Bird => new (Math.random() > 0.5 ? Fish : Bird)();
```

This function is a predicate, which returns a boolean representing that the passed `pet` is a `Fish`:

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

Which lets the compiler know that the scope in which `swim` is being called is appropriate, as the score has been narrowed to `Fish`, and in the else block it must be a `Bird` as that's the alternative that getPet returns:

```ts
const pet = getPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```

Without the predicate the type guard raises its own error:

```ts
const pet = getPet();

if (pet.swim) {
  // Property 'swim' does not exist on type 'Fish | Bird'.
  pet.swim();
  // Property 'swim' does not exist on type 'Fish | Bird'.
} else {
  pet.fly();
  // Property 'fly' does not exist on type 'Fish | Bird'.
}
```

Another example; predicates can be used to filter arrays. A mixed array of `Fish` and `Bird`s can be filtered down to an array of `Fish`:

```ts
const zoo: (Fish | Bird)[] = [getPet(), getPet(), getPet()];
const underWater: Fish[] = zoo.filter(isFish);
```
