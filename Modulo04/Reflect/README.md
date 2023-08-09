## Introdução aos Reflects no JavaScript

Em JavaScript, o objeto `Reflect` é um objeto global que fornece métodos para realizar operações reflexivas em objetos, tais como manipulação de propriedades, invocação de funções e criação de objetos. Esses métodos são projetados para serem uma alternativa mais consistente e segura para algumas operações que eram previamente realizadas diretamente nos objetos ou por meio de métodos do objeto `Object`.

### Métodos do objeto Reflect

1. **`Reflect.get(target, propertyKey [, receiver])`**
   Este método recupera o valor da propriedade de um objeto alvo.

   Exemplo:

   ```javascript
   const person = { name: "Alice", age: 30 };
   const name = Reflect.get(person, "name");
   console.log(name); // Output: "Alice"
   ```

2. **`Reflect.set(target, propertyKey, value [, receiver])`** Este método define o valor da propriedade em um objeto alvo.
   Exemplo:

```javascript
const person = { name: "Alice", age: 30 };
Reflect.set(person, "age", 31);
console.log(person.age); // Output: 31
```

3.  **`Reflect.has(target, propertyKey)`** Verifica se um objeto alvo possui uma determinada propriedade.

    Exemplo:

    ```javascript
    const person = { name: "Alice", age: 30 };
    const hasName = Reflect.has(person, "name");
    console.log(hasName); // Output: true
    ```

4.  **`Reflect.deleteProperty(target, propertyKey)`** Remove uma propriedade de um objeto alvo.

    Exemplo:

    ```javascript
    const person = { name: "Alice", age: 30 };
    Reflect.deleteProperty(person, "age");
    console.log(person.age); // Output: undefined
    ```

5.  **`Reflect.construct(constructor, argumentsList [, newTarget])`** Cria uma nova instância de um construtor com os argumentos fornecidos.

    Exemplo:

    ```javascript
    class Person {
      constructor(name) {
        this.name = name;
      }
    }
    const alice = Reflect.construct(Person, ["Alice"]);
    console.log(alice.name); // Output: "Alice"
    ```

6.  **`Reflect.apply(target, thisArgument, argumentsList)`** Invoca uma função-alvo com um determinado valor `this` e uma lista de argumentos.

    Exemplo:

    ```javascript
    function greet(name) {
      return `Hello, ${name}!`;
    }
    const greeting = Reflect.apply(greet, null, ["Alice"]);
    console.log(greeting); // Output: "Hello, Alice!"
    ```

