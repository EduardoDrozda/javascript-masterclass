
# Javascript Strict Mode

O JavaScript Strict Mode (Modo Estrito) é uma funcionalidade introduzida na versão ECMAScript 5 (ES5) que permite que você escreva código JavaScript de maneira mais segura e evite alguns comportamentos indesejados ou ambíguos. O modo estrito ajuda a identificar e corrigir erros comuns, além de melhorar a performance do código.

## Ativando o Modo Estrito

Para ativar o modo estrito em um arquivo JavaScript ou em um escopo específico, você pode usar a seguinte declaração:

javascriptCopy code

`'use strict';` 

Ao adicionar essa declaração no início de um arquivo JavaScript ou dentro de uma função, todo o código dentro desse escopo será executado em modo estrito.

## Benefícios do Modo Estrito

O modo estrito introduz várias restrições e verificações adicionais ao seu código, o que pode ajudar a evitar erros sutis e comportamentos inesperados. Alguns dos benefícios do modo estrito incluem:

1.  **Erros Mais Visíveis:** No modo estrito, certos erros que seriam ignorados ou produziriam resultados imprevisíveis em JavaScript "normal" geram erros visíveis. Isso facilita a depuração e a identificação de problemas no código.
    
2.  **Eliminação de Atribuição Silenciosa:** Em JavaScript normal, você pode inadvertidamente criar novas variáveis globais ao atribuir um valor a uma variável não declarada. No modo estrito, isso gera um erro.
    
3.  **Eliminação de Palavras-Chave Reservadas:** Alguns identificadores que são considerados palavras-chave reservadas em versões futuras do ECMAScript (ES6 e posteriores) são permitidos em código não-estricto, mas geram erros no modo estrito.
    
4.  **Proibição do Uso do `this` Global:** No modo estrito, o valor do `this` em funções não é mais o objeto global (normalmente `window` no navegador). Isso ajuda a evitar problemas onde o `this` é acidentalmente associado ao objeto global.
    
5.  **Funções Eval Mais Restritas:** O `eval` no modo estrito não tem escopo no qual foi chamado, e as declarações e declarações de função criadas dentro do `eval` não têm escopo no invocador do `eval`, ajudando a evitar vazamentos de variáveis.
    
6.  **Argumentos de Função Mais Rígidos:** No modo estrito, as mudanças nos argumentos das funções não afetam automaticamente o objeto `arguments`.
    

## Como Usar o Modo Estrito de Forma Seletiva

Se você quiser aplicar o modo estrito apenas a uma função específica ou a um trecho limitado de código, você pode usar uma função autoinvocada:

javascriptCopy code

`(function() {
    'use strict';
    // Seu código aqui
})();` 

Isso permitirá que o código dentro da função seja executado em modo estrito, enquanto o restante do código permanecerá no modo normal.

## Conclusão

O modo estrito do JavaScript é uma ferramenta valiosa para melhorar a qualidade e a segurança do seu código. Ele ajuda a capturar erros comuns, evita comportamentos indesejados e promove boas práticas de programação. Sempre que possível, é recomendado usar o modo estrito em seus projetos para colher seus benefícios.