"use strict";

const assert = require("assert");

// garantir semantica e segurança em objetos

// ---- apply
const myObj = {
  add(myValue) {
    return this.arg1 + this.arg2 + myValue;
  },
};

assert.deepStrictEqual(myObj.add.apply({ arg1: 10, arg2: 20 }, [100]), 130);

// um problema que pode acontecer (raro)
// Function.prototype.apply = function () {
//   return "Eita!";
// };

// esse aqui pode acontecer!

myObj.add.apply = function () {
  throw new TypeError("Eita!");
};

assert.throws(() => myObj.add.apply({}, []), {
  name: "TypeError",
  message: "Eita!",
});

// usando reflect:
const result = Reflect.apply(myObj.add, { arg1: 40, arg2: 20 }, [200]);
assert.deepStrictEqual(result, 260);
// ---- apply

// ---- defineProperty

// questoes semanticas
function MyDate() {}

// feio, tudo é Object, mas Object adicionando prop para uma function?
// Object.defineProperty(MyDate, "withObject", {
//   value: () => "Hey!",
// });
