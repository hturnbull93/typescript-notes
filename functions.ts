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

function printId(id: number | string) {
  console.log(`Your ID is: ${id}`);
}

printId(101);
printId("202");

function printIdUpperCase(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printIdUpperCase(123);
printIdUpperCase('abc');

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler " + x);
  }
}

welcomePeople(['Jessie', 'Alistair']);
welcomePeople('Steve');

function printFirstThree(x: number[] | string) {
  console.log(x.slice(0, 3));
}

printFirstThree('three');
printFirstThree([1, 2, 3, 4, 5]);

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
scold(spot);
