enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const generateLast = () => Math.ceil(Math.random() * 10 + 3);

enum Codes {
  first = 1,
  second,
  third,
  last = generateLast(),
}

const keyForSecond = Codes[2];

enum Cardinals {
  north = "NORTH",
  east = "EAST",
  south = "SOUTH",
  west = "WEST",
}

const goInADirectionEnum = (direction: Cardinals) => {
  console.log(`Going: ${direction}`);
};

goInADirectionEnum(Cardinals.north);

const goInADirectionUnion = (
  direction: "NORTH" | "EAST" | "SOUTH" | "WEST"
) => {
  console.log(`Going: ${direction}`);
};

goInADirectionUnion("NORTH");

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
