// aliases
type TValueType = number | string;
function sum1(a: TValueType, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Invalid");
}
console.log("cehck:", sum1(1, 3));
