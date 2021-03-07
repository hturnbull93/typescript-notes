# Basic TypeScript

- [Source](https://www.freecodecamp.org/news/learn-typescript-in-5-minutes-13eda868daeb/)
- [Interactive course](https://scrimba.com/learn/intrototypescript)

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

## Types

Type annotations are the bread and butter of TypeScript, and enforce what sort of values can appear and be used where.

[More info](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html).

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
