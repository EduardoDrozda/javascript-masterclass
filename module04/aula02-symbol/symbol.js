const assert = require("assert");

// --- keys
const uniqueKey = Symbol("userName");
const user = {};

user["userName"] = "value for normal Objects";
user[uniqueKey] = "value for Symbol";

console.log("getting normal Objects >", user.userName);

// sempre único em nivel de endereco de memoria
// console.log("getting symbol Objects >", user[Symbol("userName")]);
// console.log("getting symbol Objects >", user[uniqueKey]);

assert.deepStrictEqual(user.userName, "value for normal Objects");
assert.deepStrictEqual(user[Symbol("userName")], undefined);
assert.deepStrictEqual(user[uniqueKey], "value for Symbol");

// é difcil de pegar, mas não é secreto!
console.log("symbols", Object.getOwnPropertySymbols(user)[0]);

// byPass = má prática (nem tem no codebase do node) - não usar
user[Symbol.for("password")] = 123;
assert.deepStrictEqual(user[Symbol.for("password")], 123);

// --- keys
// Well Know Symbols
const obj = {
  // iterators
  [Symbol.iterator]: () => ({
    items: ["c", "b", "a"],
    next() {
      return {
        done: this.items.length === 0,
        // remove o ultimo e retorna
        value: this.items.pop(),
      };
    },
  }),
};

assert.deepStrictEqual([...obj], ["a", "b", "c"]);

const kItems = Symbol("kItems");
class MyDate {
  constructor(...args) {
    this[kItems] = args.map((arg) => new Date(...arg));
  }

  [Symbol.toPrimitive](coercionType) {
    if (coercionType !== "string") throw new TypeError();

    const items = this[kItems].map((item) =>
      new Intl.DateTimeFormat("pt-BR", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      }).format(item)
    );

    return new Intl.ListFormat("pt-BR", {
      style: "long",
      type: "conjunction",
    }).format(items);
  }

  get [Symbol.toStringTag]() {
    return "MyDate";
  }

  *[Symbol.iterator]() {
    for (const item of this[kItems]) {
      yield item;
    }
  }

  async *[Symbol.asyncIterator]() {
    const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    for (const item of this[kItems]) {
      await timeout(100);
      yield item.toISOString();
    }
  }
}

const myDate = new MyDate([2020, 03, 01], [2020, 02, 02]);

const expectedDates = [new Date(2020, 03, 01), new Date(2020, 02, 02)];

assert.deepStrictEqual(
  Object.prototype.toString.call(myDate),
  "[object MyDate]"
);

assert.throws(() => {
  myDate + 1;
}, TypeError);

// coerção explícita para chamada do Symbol.toPrimitive
assert.deepStrictEqual(
  String(myDate),
  "01 de abril de 2020 e 02 de março de 2020"
);

// implementar o iterator!
assert.deepStrictEqual([...myDate], expectedDates);

(async () => {
  const dates = [];
  for await (const date of myDate) {
    dates.push(date);
  }

  assert.deepStrictEqual(
    dates,
    expectedDates.map((date) => date.toISOString())
  );
})();

(async () => {
  const dates = [];
  for await (const date of myDate) {
    dates.push(date);
  }

  assert.deepStrictEqual(
    dates,
    expectedDates.map((date) => date.toISOString())
  );
})();
