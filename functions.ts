function greet(name: string) {
  console.log(`Hello, ${name.toUpperCase()}!!`);
}

greet("John");

function double(x: number): number {
  return x * 2;
}

const four = double(2);
console.log("four :>>", four);

const square = (x: number): number => x * x;

const sixteen = square(4);
console.log("sixteen :>>", sixteen);
