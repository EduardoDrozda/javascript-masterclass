#Strict Mode

Use strict serve para evitar erros de produção de forma inesperada.

Ferramentas como Typescript e babel usam o strict mode por padrão.

Ao colocar a string "use strict no começo de um arquivo js" para validações 
  de semanticas (validacoes de variáveis inexistentes ou variáveis com nomes reservados)

  Todos os browsers modernos possuem suporte (exceto IE 9)

##Exemplos 

```
"use strict";
x = 3.14; // Ao ser complitado causara um erro pois está variavel não foi declarada.

```
```
"use strict";

myFunction();

function myFunction() {
  y = 3.14;   // Irá ocasionar um erro pois a variavel y não foi devidamente declarada.
}

```
```
x = 3.14;       // Aqui não irá ocasionar enhum erro.

myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // Erro
}

```

É recomendado sempre usarmos o modo strict em seus códigos js, para termos mais seguranças de validações.

### O que não é permitido com o Strict mode.

- Usar variáveis sem declará-la antes.
- Usar objectos sem declará-la.
- Excluir variáveis e funções
- Duplicar parametros de funções.
- Números octais (010).
- Usar ``escape`` em números octais ("\010").
- Sobrescrever valores de somente leitura.
- Atribuir valores para métodos ``get``.
- Deletar valores não permitidos.
- Declarar variáveis com palavras reservadas.
- 