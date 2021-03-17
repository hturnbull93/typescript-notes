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

logValue('hello there');
logValue(new Date());
