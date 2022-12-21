/* 
  Generators são funções especiais que podem ser executadas, pausadas 
  e continuadas em diferentes estágios da sua execução, 
  tudo isso graças a nova palavra reservada yield. 

  Nós declaramos uma função generator usando a sintaxe especial: function* myfunction() {}

  Chamamos essa função que na sua primeira execução retorna o objeto generator. 
  Esse objeto tem um método chamado next que executa o generator com seu estado atual.

  O generator não é executado até a primeira chamada do .next seja executada.

  Cada vez que .next é chamado, o generator é executado até o próximo yield. 
  A chamada para .next retorna um objeto contendo o valor retornado pelo yield 
  e uma flag dizendo se o generator foi finalizado ou não.
*/

const assert = require("assert");

function* calculation(arg1, arg2) {
  yield arg1 + arg2;
}

function* main() {
  yield "Hello";
  yield "-";
  yield "World";
  yield* calculation(10, 20);
}

const generator = main();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

assert.deepStrictEqual(generator.next(), { value: "Hello", done: false });
assert.deepStrictEqual(generator.next(), { value: "-", done: false });
assert.deepStrictEqual(generator.next(), { value: "World", done: false });
assert.deepStrictEqual(generator.next(), { value: 30, done: false });
assert.deepStrictEqual(generator.next(), { value: undefined, done: true });

assert.deepStrictEqual(Array.from(main()), ["Hello", "-", "World", 30]);
assert.deepStrictEqual([...main()], ["Hello", "-", "World", 30]);

const { readFile, stat, readdir } = require("fs/promises");
function* promisified() {
  yield readFile(__filename);
  yield Promise.resolve("Hey Dude");
}

async function* systemInfo() {
  const file = await readFile(__filename);
  yield { file: file.toString() };

  const { size } = await stat(__filename);
  yield size;
  const dir = await readdir(__dirname);
  yield { dir };
}

// Promise.all([...promisified()]).then(console.log);
(async () => {
  for await (const item of systemInfo()) {
    console.log("systemInfo", item);
  }
})();
