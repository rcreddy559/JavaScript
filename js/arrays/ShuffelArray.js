//https://stackabuse.com/shuffling-arrays-in-javascript/

const packOfCards = ['a', 1, 3, 4, 5, 6, 7, 8, 9, 'b', 'c', 'd', 'f']
const array2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let randam = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[randam]] = [arr[randam], arr[i]]
    }
    return arr;
}

console.log(`packOfCards: ${packOfCards}`);
console.log(shuffle(`shuffle pack of cards: ${packOfCards}`));

console.log(array2d);
console.log(shuffle(array2d));




