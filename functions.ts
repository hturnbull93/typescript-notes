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

const names = ["Alice", "Bob", "Eve"];

names.forEach((s) => {
  console.log(s.toUpperCase());
});

const describePerson = (person: { firstName: string, age: number }) => {
  console.log(`${person.firstName} is ${person.age} years old`);
};

describePerson({ firstName: "Bob", age: 35 });

function printCoord(pt: { x: number; y: number }) {
  console.log(`The coordinate's position is x: ${pt.x}, y: ${pt.y}`);
}

printCoord({ x: 3, y: 7 });

const greetPerson = (person: { firstName: string, lastName?: string }) => {
  if (person.lastName !== undefined) {
    console.log(`Hello, ${person.firstName.toUpperCase()} ${person.lastName.toUpperCase()}`)
  } else {
    console.log(`Hello, ${person.firstName.toUpperCase()}`)
  }
}

greetPerson({ firstName: "Alice" });
greetPerson({ firstName: "Chris", lastName: 'Jenkins' });
