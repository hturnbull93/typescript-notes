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

const greetPerson = (
  person: { firstName: string; lastName?: string } | "unknown"
) => {
  if (person === "unknown") {
    console.log("Hello, stranger");
  } else if (person.lastName !== undefined) {
    console.log(`Hello, ${person.firstName} ${person.lastName}`);
  } else {
    console.log(`Hello, ${person.firstName.toUpperCase()}`);
  }
};

greetPerson("unknown");
// Hello, stranger
greetPerson({ firstName: "Alice" });
// Hello, Alice
greetPerson({ firstName: "Chris", lastName: "Jenkins" });
// Hello, Chris Jenkins

const mutableProperties = { one: 1 };
mutableProperties.one = 2;

const immutableUsingAs = { one: 1 as 1 };

const immutableUsingConst = { one: 1 } as const;
