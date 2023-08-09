
# Tipos Primitivos em JavaScript

JavaScript possui os seguintes tipos primitivos:

- **Number:** Representa números, sejam inteiros ou de ponto flutuante.
- **String:** Representa sequências de caracteres.
- **Boolean:** Representa valores verdadeiros (*true*) ou falsos (*false*).
- **Undefined:** Representa uma variável que foi declarada, mas não possui valor atribuído.
- **Null:** Representa a ausência intencional de valor.
- **Symbol:** Introduzido no ECMAScript 6 (ES6), representa um valor único e imutável usado como chave de propriedades de objetos.
- **BigInt:** Introduzido no ES11, é usado para representar inteiros maiores do que 2^53 - 1.

Esses tipos primitivos são armazenados na memória de forma diferente em comparação com objetos. Eles são armazenados diretamente na variável ou na estrutura de dados que os contém, ao contrário dos objetos, que são armazenados por referência.

Quando um valor primitivo é atribuído a uma variável, ele é armazenado diretamente nessa variável ou em uma estrutura de dados que a mantém. Por exemplo:

```javascript
let num = 42;        // Tipo Number
let name = "John";   // Tipo String
let flag = true;     // Tipo Boolean
```
Cada variável contém diretamente o valor do tipo primitivo associado. Não há um endereço de memória separado para essas variáveis, pois os valores primitivos são imutáveis e pequenos o suficiente para serem armazenados diretamente.

Em contraste, objetos em JavaScript são armazenados por referência. Quando você cria um objeto e atribui a uma variável, a variável armazena uma referência ao objeto na memória, em vez de armazenar o objeto diretamente.

```javascript
let person = { name: "Alice", age: 30 };  // Objeto armazenado por referência
```
Portanto, enquanto valores primitivos são diretamente armazenados na variável ou na estrutura de dados que os contém, objetos são armazenados em um local de memória separado e a variável contém apenas a referência a esse local.
