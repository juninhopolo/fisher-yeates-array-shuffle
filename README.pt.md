# fisher-yeates-array-shuffle

Algoritmo de Fisher-Yeates implementado em Javascript. [English](./README.pt.md)

Hoje, vi um vídeo no Youtube sobre recriar o jogo Campo Minado em Javascript. Eu não vi o vídeo inteiro porque eu queria ver se conseguiria implementá-lo por conta própia. Eu comecei a codificar a matrix 10x10 e preenchê-la com zeros (sem minas) e uns (minas). Eu precisava embraralhar o array para que a cada vez que um novo jogo fosso gerado as minas fossem aleatóriamente colocadas no tabuleiro.

Eu criei um projeto em NodeJS e rapidamente pesquisei no google "array shuffle npm" e achei um pacote que embaralhava arrays. Antes disso eu também pesquisei no google "array shuffle javascript" para ver se o javascript já tinha implementado essa funcionalidade nativamente.

Eu achei esse código:

```javascript
    array.sort(function (a, b) {
        return 0.5 — Math.random()
    });
```

Lendo mais sobre isso eu vi que esse algoritmo não funcionar porque ele não embraralha cada elemento com chances de permutação igualmente prováveis (algo assim).

O mesmo artigo mencionou o algoritmo de Fisher-Yates, criado em 1937. Esse algoritmo tem probabilidade de embraralhamento iguais e é mais rápido / eficiente.

Para o jogo eu não queria criar um projeto em NodeJS, em para continuar codificando eu implementei o algoritmo em uma função para usá-la no jogo.

Pseudocódigo e mais em: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
