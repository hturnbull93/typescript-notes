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

interface Animal {
  name: string,
}

interface Bear extends Animal {
  honey: boolean,
}

interface Bear {
  friends: string[],
}

const winnie: Bear = {
  name: 'Winnie the Pooh',
  honey: true,
  friends: ['Piglet'],
};