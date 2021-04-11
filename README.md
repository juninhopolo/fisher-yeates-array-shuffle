# fisher-yeates-array-shuffle

A Javascript Fisher-Yates array shuffle implementation. [Portuguese](./README.pt.md)

Today, I saw a video on Youtube about creating a Minesweeper game in Javascript. I did not see the whole video because I wanted to see if I could do that on my own. So I began coding the 10x10 matrix and filling it with zeros (no mines) and ones (mines). I needed to shuffle the array so every time a new game were generated the mines were randomly assign in the board.

I created a project in NodeJS so I quickly googled "array shuffle npm" and found a package that shuffles arrays. Before that I also googled "array shuffle javascript" to see if javascript had already implemented this functionality natively.

I found this code snippet:

```javascript
    array.sort(function (a, b) {
        return 0.5 — Math.random()
    });
```

Reading more about that I saw that this algorithm do not work because it do not shuffle every element with equally likely permutation chances (something like that).

The same article mentioned the Fisher-Yates shuffle algorithm, created in 1937. This algorithm have equals shuffle probability and is more faster / efficient.

For the game I dont want to created a NodeJS project, so to continue coding I implemented this algorithm in a function to use it in the game.

Pseudocode and more in: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
