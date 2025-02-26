function doWhile(): never {
  console.log("running 123123");
  while (true) {
    console.log("running");
  }
}

function handleException(mess: string): never {
  throw new Error(mess);
}

let a = doWhile();
console.log("cehckj ", a);
