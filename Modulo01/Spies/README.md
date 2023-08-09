
# Spies em JavaScript

Um **"spy"** em JavaScript refere-se a uma técnica de teste usada para monitorar e verificar o comportamento de funções durante a execução de um programa. Spies são frequentemente usados em testes de unidade e integração para verificar se certas funções foram chamadas, quantas vezes foram chamadas e com quais argumentos foram chamadas.

## Por que usar Spies?
O uso de spies é benéfico para testar o comportamento interno de funções sem modificar o código original. Isso é particularmente útil ao testar funções que interagem com APIs externas, chamadas de rede ou outras funcionalidades que podem ter efeitos colaterais.

## Como Usar Spies
Aqui está um exemplo simples de como usar spies usando a biblioteca de testes Jasmine:

```javascript
// Imagine que temos a seguinte função
function somar(a, b) {
    return a + b;
}

// No teste com Jasmine, podemos criar um spy para a função somar
describe("Teste para a função somar", function() {
    it("deve chamar a função somar corretamente", function() {
        // Criar um spy para a função somar
        spyOn(window, 'somar');
        
        // Chamar a função que deveria invocar a função somar
        // ...

        // Verificar se a função somar foi chamada
        expect(somar).toHaveBeenCalled();

        // Verificar quantas vezes a função foi chamada
        expect(somar).toHaveBeenCalledTimes(1);

        // Verificar com quais argumentos a função foi chamada
        expect(somar).toHaveBeenCalledWith(2, 3);
    });
});

Neste exemplo, o spy é criado usando `spyOn` e é aplicado à função `somar`. Em seguida, podemos usar os métodos de verificação fornecidos pelo Jasmine para verificar se a função foi chamada e como foi chamada.

## Conclusão

Os spies em JavaScript são uma ferramenta valiosa para testes, permitindo que você verifique o comportamento de funções sem alterar o código original. Eles são frequentemente usados em conjunto com estruturas de teste como o Jasmine, embora outras bibliotecas de teste também tenham recursos semelhantes. Usar spies ajuda a garantir a qualidade do seu código, identificando problemas e assegurando que suas funções se comportem conforme o esperado.
