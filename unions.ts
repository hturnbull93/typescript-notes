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
