const assert = require("assert");

// usado na maioria das vezes para listas de itens unicos

const arr1 = ["0", "1", "2"];
const arr2 = ["2", "0", "3"];
const arr3 = arr1.concat(arr2);
// console.log("arr3", arr3.sort());
assert.deepStrictEqual(arr3.sort(), ["0", "0", "1", "2", "2", "3"]);

const set = new Set();
arr1.map((item) => set.add(item));
arr2.map((item) => set.add(item));

// console.log("set", set);
assert.deepStrictEqual(Array.from(set), ["0", "1", "2", "3"]);
// rest/spread
assert.deepStrictEqual(Array.from(new Set([...arr1, ...arr2])), [
  "0",
  "1",
  "2",
  "3",
]);

// console.log("set.keys", set.keys());
// mesma coisa que set.keys, só existe por questões de compatibilidade com o Map
// console.log("set.values", set.values());

// no Array comum, para saber se um item existe
// [].indexof('1') !== -1 ou [0].includes(0)
assert.ok(set.has("1"));

// mesma teoria do Map, mas você sempre trabalha com a lista toda
// nao tem get, então você pode saber se o item está ou não no array e é isso.
// na documentação tem exemplos sobre como fazer um tenterceção, saber o que tem em uma lista e não tem na outra, etc

// tem nos dois arrays
const users01 = new Set(["Erick Wendel", "Mariana Wendel", "Xuxa da Silva"]);

const users02 = new Set(["Joãozinho", "Erick Wendel", "Julio"]);

const intersection = new Set([...users01].filter((user) => users02.has(user)));
assert.deepStrictEqual(intersection, new Set(["Erick Wendel"]));

const difference = new Set([...users01].filter((user) => !users02.has(user)));
assert.deepStrictEqual(
  difference,
  new Set(["Mariana Wendel", "Xuxa da Silva"])
);

// weakset

// mesma ideia do weakmap, só que para set
// não é enumeravel, não é iteravel, não é possivel limpar, não é possivel saber o tamanho
// só é possivel adicionar e remover
// só trabalha com chaves como referencia, não com valores

const user = { id: 123 };
const user2 = { id: 321 };

const weakset = new WeakSet([user]);
weakset.add(user2);
// weakset.add("string"); // TypeError: Invalid value used in weak set
// weakset.add(123); // TypeError: Invalid value used in weak set
// weakset.add(null); // TypeError: Invalid value used in weak set

weakset.delete(user);
weakset.has(user2);
