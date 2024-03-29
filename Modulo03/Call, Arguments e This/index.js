"use strict";

const {
  watch,
  promises: { readFile },
} = require("fs");

class File {
  watch(event, filename) {
    console.log("this", this);
    console.log("arguments", Array.prototype.slice.call(arguments));
    this.showContent(filename);
  }

  async showContent(filename) {
    console.log((await readFile(filename)).toString());
  }
}

// watch(__filename, async (event, filename) => {
//   console.log((await readFile(__filename)).toString());
// });

const file = new File();
// dessa forma, ele ignora o 'this' da classe File
// herda o this do watch
// watch(__filename, file.watch);

//alternativa para não herdar o this da funcao
// mas fica feio!
// watch(__filename, (event, filename) => {
//   file.watch(event, filename);
// });

//podemos deixar explicito qual é o contexto que a funcao deve seguir
// o bind retorna uma função com 'this' que se mantém de file, ignorando o contexto do watch
// watch(__filename, file.watch.bind(file));

//outra alternativa é usar o call
// o call chama a função com o contexto que passamos
// watch(__filename, file.watch.call(file));
file.watch.call(
  { showContent: () => console.log("call: hey sinon!") },
  null,
  __filename
);

//outra alternativa é usar o apply
// o apply chama a função com o contexto que passamos
// watch(__filename, file.watch.apply(file));
// a diferença entre o call e o apply é que o apply recebe os parametros como um array
file.watch.apply({ showContent: () => console.log("apply: hey sinon!") }, [
  null,
  __filename,
]);
