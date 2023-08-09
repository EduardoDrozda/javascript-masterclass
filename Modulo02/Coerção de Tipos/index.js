99999999999999999; // 16
// 1000000000000000

true + 2;
// 3

"21" + true;
// '21true'
"21" - true;
// 20
21 - -1;
// 22
0.1 + 0.2 === 0.3;
// false
3 > 2 > 1;
// false
3 > 2 >= 1;
// true

"B" + "a" + +"a" + "a";
// 'BaNaNa'

"1" == 1;
// true

"1" === 1;
// false

// =======================

console.assert(String(123) === "123", "explicit convertion to string");
console.assert(123 + "" === "123", "implicit covertion to string");

console.assert(("hello" || 123) === "hello", "|| returns the first element!");
console.assert(("hello" && 123) === 123, "&& returns the last element!");

// ========================

const item = {
  name: "Eduardo Drozda",
  age: 25,
  // string: 1 se não for primitivo, chama o valueOf
  toString() {
    return `Name ${this.name}, Age: ${this.age}`;
  },
  // number: 1 se não for primitivo, chama o to String
  valueOf() {
    return 007;
  },
};

console.log("toString", String(item));
console.log("valueOf",  Number(item));
