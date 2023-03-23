
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Alberto', 'Victoria', 'Rita', 'María', 'Isabella'])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);