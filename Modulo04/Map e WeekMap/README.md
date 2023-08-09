# Map e WeakMap em JavaScript

O JavaScript oferece as estruturas de dados `Map` e `WeakMap` para lidar com associações de pares chave-valor de maneiras flexíveis. Ambos têm suas próprias vantagens e casos de uso específicos.

## Map

### O que é um Map?

`Map` é uma estrutura de dados introduzida no ECMAScript 6 (ES6) que permite armazenar pares de chave e valor, onde as chaves podem ser de qualquer tipo, incluindo objetos e funções.

### Vantagens do Map:

- Chaves flexíveis para uma variedade de tipos.
- Mantém a ordem de inserção dos pares.
- Métodos úteis para gerenciar os pares chave-valor.

#### Exemplo de uso de Map:

```javascript
// Criando um Map
const userMap = new Map();

// Adicionando pares chave-valor
const user1 = { id: 1 };
const user2 = { id: 2 };

userMap.set(user1, "John");
userMap.set(user2, "Alice");

// Acessando valores usando chaves
console.log(userMap.get(user1)); // Saída: John

// Verificando a existência de uma chave
console.log(userMap.has(user2)); // Saída: true

// Iterando sobre os pares chave-valor
userMap.forEach((value, key) => {
  console.log(`User ${key.id}: ${value}`);
});
```

## WeakMap

### O que é um WeakMap?

`WeakMap` também é uma estrutura de dados introduzida no ES6, mas com a diferença de que as chaves são mantidas de forma "fraca" e só podem ser objetos.

### Vantagens do WeakMap:

- Evita vazamentos de memória, permitindo que chaves sejam coletadas pelo garbage collector.
- Privacidade de dados associados a objetos.

#### Exemplo de uso de WeakMap:

```javascript
// Criando um WeakMap
const privateData = new WeakMap();

// Classe para ilustrar o uso
class PrivateStorage {
  constructor() {
    privateData.set(this, {});
  }

  set(key, value) {
    const data = privateData.get(this);
    data[key] = value;
  }

  get(key) {
    const data = privateData.get(this);
    return data[key];
  }
}

const instance1 = new PrivateStorage();
const instance2 = new PrivateStorage();

instance1.set("secret", "my secret data");

console.log(instance1.get("secret")); // Saída: my secret data
console.log(instance2.get("secret")); // Saída: undefined
```

## Diferenças entre Map e WeakMap

- **Tipos de Chave:** `Map` aceita qualquer tipo de chave, enquanto `WeakMap` aceita apenas objetos.
- **Garbage Collection:** Chaves de `WeakMap` podem ser coletadas pelo garbage collector; isso não ocorre com chaves de `Map`.
- **Acesso às Chaves:** Chaves em `WeakMap` não podem ser acessadas externamente.
- **Ordem de Inserção:** Ambos mantêm a ordem de inserção, mas `WeakMap` pode perder essa ordem.

## Uso Adequado

Use `Map` quando precisar associar dados a chaves de tipos diversos e desejar controlar o ciclo de vida dos pares chave-valor. Use `WeakMap` quando desejar associar dados a objetos temporários e evitar vazamentos de memória, ou quando quiser manter dados privados associados a objetos.

Lembre-se de que a escolha entre `Map` e `WeakMap` depende das necessidades específicas do seu projeto.
