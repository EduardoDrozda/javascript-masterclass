const assert = require("assert");
const myMap = new Map();

// podem ter qualquer tipo de chave

myMap
  .set(1, "one")
  .set(2, { text: "two" })
  .set(true, () => "hello");

// usando um contrutor
const myMapWithConstructor = new Map([
  [1, "one"],
  [2, { text: "two" }],
  [true, () => "hello"],
]);

// console.log(myMap);
// console.log("myMap.get", myMap.get(1));

assert.deepStrictEqual(myMap.get(1), "one");
assert.deepStrictEqual(myMap.get(2), { text: "two" });
assert.deepStrictEqual(myMap.get(true)(), "hello");

// Em objetos a chave só pode ser string ou symbol
const onlyReferenceWorks = {
  id: 1,
};
myMap.set(onlyReferenceWorks, { name: "User" });

assert.deepStrictEqual(myMap.get({ id: 1 }), undefined);
assert.deepStrictEqual(myMap.get(onlyReferenceWorks), { name: "User" });

// utilitarios
// - No Object seria Object.keys(obj).length

assert.deepStrictEqual(myMap.size, 4);

// para verificar se um item existe no objeto
// item.key = se não existe - undefined
// if() = coerção implicita para boolean e retorna false
// O jeito certo em Object é ({ name: "User" }).hasOwnProperty("name")
assert.ok(myMap.has(onlyReferenceWorks));

// para remover um item do objeto
// delete item.key
// imperformático para javascript
assert.ok(myMap.delete(onlyReferenceWorks));

// Não dá para iterar em Object diretamente
// tem que transformar o object utilizando Object.entries(obj)
assert.deepStrictEqual(
  JSON.stringify([...myMap]),
  JSON.stringify([
    [1, "one"],
    [2, { text: "two" }],
    [true, () => "hello"],
  ])
);

// for (const [key, value] of myMap) {
//   console.log("key", key);
//   console.log("value", value);
// }

// Object é inseguro, pois dependendo do nome da chave, pode substituir algum comportamento padrao
// ({}).toString = () => "xpto"

// qualquer chave pode colodir, com as propriedas herdada do object, como

const actor = {
  name: "Willian",
  toString: "xpto",
};

myMap.set(actor);

assert.ok(myMap.has(actor));
assert.throws(() => myMap.get(actor).toString, TypeError);

// Nao da para limpar um obj sem reassila=no
myMap.clear();
assert.deepStrictEqual(myMap.size, 0);
assert.deepStrictEqual([...myMap.keys()], []);

// ---- WeekMap ----

// Pode ser coletado após perder as referencias
// usado em casos beem especificos

// tem a maioria das funcionalidades do Map
// MAS: não é iteravel
// Só chaves de referencia que você já conheça
// mais levee preve leak de memoria, pq depois que as instancias sao perdidas, o garbage collector limpa

const weakMap = new WeakMap();

const hero = {
  name: "Batman",
};

// weakMap.set(hero);
// weakMap.get(hero);
// weakMap.delete(hero);
// weakMap.has(hero);

// links de leitura
// https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373
// https://dmitripavlutin.com/maps-vs-plain-objects-javascript/
// https://medium.com/@leonardobrunolima/javascript-tips-map-and-weakmap-f38f9c4ed2b6
// https://javascript.info/map-set
