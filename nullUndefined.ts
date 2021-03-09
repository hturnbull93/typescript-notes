function checkForNull(x: string | undefined) {
  if (x === undefined) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

function noCheckForNull(x: string | undefined) {
    console.log("Hello, " + x.toUpperCase());
}

function assertNonNull(x: string | undefined) {
  console.log("Hello, " + x!.toUpperCase());
}
