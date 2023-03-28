async function* anotherGeneretor() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGeneretor();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello!');

async function arryOfName(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const name = arryOfName(['Oscar', 'David', 'Anna', 'Christiaan']);
console.log('After');