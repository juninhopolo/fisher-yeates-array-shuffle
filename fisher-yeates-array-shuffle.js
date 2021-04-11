Array.prototype.shuffle = function () {
    //Fisher-Yeates Array Shuffle

    //Going through the entire array from end to beginning skipping the zeroth index;
    for (let i = this.length - 1; i > 0; i--) {
        //Generating a random number between 0 and i;
        let j = parseInt(Math.random() * (i + 1));

        //Swapping values;
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
};

const array = [];
const arraySize = 100;

//Filling the array with numbers;
for (let i = 0; i < arraySize; i++) {
    array[i] = i;
}

console.log(array);
console.log(array.shuffle());
