## Proxy em JavaScript

Um Proxy é um objeto especial em JavaScript que permite controlar o acesso a outro objeto. Ele atua como um intermediário entre o código que acessa o objeto e o próprio objeto, permitindo definir comportamentos personalizados para várias operações, como leitura, escrita, exclusão de propriedades e muito mais.

Exemplo de uso de um Proxy:

```javascript
const targetObject = {
  name: "Alice",
  age: 30,
};

const handler = {
  get: function (target, property) {
    console.log(`Acessando a propriedade: ${property}`);
    return target[property];
  },
  set: function (target, property, value) {
    console.log(`Definindo a propriedade: ${property} com o valor: ${value}`);
    target[property] = value;
  },
};

const proxy = new Proxy(targetObject, handler);

proxy.name; // Imprime "Acessando a propriedade: name" e retorna "Alice"
proxy.age = 31; // Imprime "Definindo a propriedade: age com o valor: 31"
```

No exemplo acima, estamos usando dois métodos do handler de Proxy:

- **`get`**: Chamado quando uma propriedade é lida do objeto proxy. Neste caso, ele exibe uma mensagem e retorna o valor da propriedade correspondente no objeto alvo.
- **`set`**: Chamado quando uma propriedade é escrita no objeto proxy. Ele exibe uma mensagem e define o valor da propriedade correspondente no objeto alvo.

## Timers em JavaScript

Timers são funções em JavaScript que permitem agendar a execução de código para ocorrer em um momento futuro ou em intervalos regulares. Os principais timers são `setTimeout`, `setInterval` e `requestAnimationFrame`.

Exemplos de uso de timers:

1.  `setTimeout`:

```javascript
console.log("Começando...");
setTimeout(function () {
  console.log("Executando após 2 segundos");
}, 2000);
console.log("Continuando...");
```

O método **`setTimeout`** agenda a execução de uma função após um certo período de tempo. Neste exemplo, "Executando após 2 segundos" será impresso após 2 segundos, mas o código continuará executando enquanto isso.

2.  `setInterval`:

```javascript
let counter = 0;
const intervalId = setInterval(function () {
  console.log(`Contador: ${counter}`);
  counter++;
  if (counter > 5) {
    clearInterval(intervalId);
  }
}, 1000);
```

O método **`setInterval`** agendará a execução de uma função em intervalos regulares. Neste caso, o contador será impresso a cada segundo até atingir 6.

3.  `requestAnimationFrame`:

```javascript
function animate(timestamp) {
  console.log(`Quadro do navegador: ${timestamp}`);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

O método **`requestAnimationFrame`** é usado para criar animações suaves, pois está sincronizado com as atualizações de quadros do navegador. Neste exemplo, a função `animate` será chamada a cada quadro do navegador, permitindo criar animações fluidas.

Em resumo, os Proxies permitem controlar o acesso a objetos em JavaScript, enquanto os timers (como `setTimeout` e `setInterval`) permitem agendar a execução de código em momentos futuros ou em intervalos regulares.

Em resumo, os Proxies permitem controlar o acesso a objetos em JavaScript, enquanto os timers (como `setTimeout` e `setInterval`) permitem agendar a execução de código em momentos futuros ou em intervalos regulares.
