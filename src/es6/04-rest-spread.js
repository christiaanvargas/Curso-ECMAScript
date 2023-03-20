// arrays destructuring

let fruits = ['Apple', 'Lemon'];
let [a, b] = fruits;
console.log(a, b); // ejemplo 1 destrucrado.
console.log(a, fruits[1]); // ejemplo 2 de destructuración.

// Object destructuring

let user = {username: 'Christiaan', age: 43 }
let {username, age} = user;
console.log(username, age); // ejemplo 3
console.log(username, user.age); // ejemplo 4

// spread operatio

let person = {name: 'Oscar', age: 28};
let country = 'MX';

let data ={ id: 1, ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);
