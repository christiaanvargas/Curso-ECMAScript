// Declarando una clases en JS
class User {};
// const newUser = new User();
// Instancia de una clase

class user {
    // Metodo saludo
    greeting () {
        return 'Hello!';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor

class user {
    // Constructor
    constructor ()  {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello!';
    }
}

const david = new user();

// thuis

class user {
    constructor(name) {
        this.name = name;
    }
    // metodo
    speak() {
        return 'Hello!';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Anna');
console.log(ana.greeting());

// settter and getters

class user {
    // sección de contructor
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    speak(){
        return 'Helllo!';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    // palabras reservadas
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebelopper = new user('David', 15);
console.log(bebelopper.uAge);
console.log(bebelopper.uAge = 20);