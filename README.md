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
