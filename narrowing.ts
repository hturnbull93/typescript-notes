function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  } else {
    return padding + input;
  }
}

console.log(padLeft(2, "padded on the left"));
console.log(padLeft("hello", "world"));

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
printAll("hey");
printAll(null);

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
printThese("hey");
printThese(null);

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

logValue("hello there");
logValue(new Date());

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

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

let pet = getPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const zoo: (Fish | Bird)[] = [getPet(), getPet(), getPet()];
const underWater: Fish[] = zoo.filter(isFish);

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === "square") {
    return shape.sideLength ** 2;
  }
}

function getAreaExhaustive(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
