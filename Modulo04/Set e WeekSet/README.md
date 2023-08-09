
## Set em JavaScript

Em JavaScript, um `Set` é uma estrutura de dados que permite armazenar um conjunto de valores únicos. Isso significa que não pode haver valores duplicados em um `Set`. Além disso, os elementos em um `Set` são armazenados em ordem de inserção. Aqui estão alguns métodos importantes disponíveis em um objeto `Set`:

-   `add(valor)`: Adiciona um novo valor ao `Set`.
-   `delete(valor)`: Remove um valor específico do `Set` se ele estiver presente.
-   `has(valor)`: Verifica se um valor está presente no `Set`.
-   `clear()`: Remove todos os valores do `Set`, tornando-o vazio.
-   `size`: Retorna o número de elementos no `Set`.

Exemplo de uso:
```javascript
// Criando um Set
let numeros = new Set();

// Adicionando valores
numeros.add(5);
numeros.add(10);
numeros.add(15);
numeros.add(10); // Isso não terá efeito, já que 10 já está presente

console.log(numeros.size); // Saída: 3
console.log(numeros.has(5)); // Saída: true

numeros.delete(10);
console.log(numeros.size); // Saída: 2

numeros.clear();
console.log(numeros.size); // Saída: 0
``` 

## WeakSet em JavaScript

Um `WeakSet` é semelhante a um `Set`, mas possui algumas diferenças importantes:

1.  Os elementos em um `WeakSet` só podem ser objetos (não primitivos).
2.  Os elementos em um `WeakSet` não são mantidos em memória, o que significa que eles podem ser automaticamente coletados pelo mecanismo de coleta de lixo se não houver outras referências para eles.

Métodos em um `WeakSet`:

-   `add(valor)`: Adiciona um novo valor ao `WeakSet`.
-   `delete(valor)`: Remove um valor específico do `WeakSet` se ele estiver presente.
-   `has(valor)`: Verifica se um valor está presente no `WeakSet`.

Exemplo de uso:

```javascript
// Criando um WeakSet
let objetos = new WeakSet();

// Criando objetos para usar como elementos
let obj1 = { id: 1 };
let obj2 = { id: 2 };
let obj3 = { id: 3 };

// Adicionando objetos ao WeakSet
objetos.add(obj1);
objetos.add(obj2);

console.log(objetos.has(obj1)); // Saída: true
console.log(objetos.has(obj3)); // Saída: false

objetos.delete(obj2);
console.log(objetos.has(obj2)); // Saída: false
``` 

Lembre-se de que, como os `WeakSets` não mantêm os objetos em memória, eles podem ser úteis quando você precisa associar informações extras a objetos temporários que serão coletados pela coleta de lixo quando não forem mais necessários.