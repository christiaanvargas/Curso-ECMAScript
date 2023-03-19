function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'CO'
    console.log(name, age, country);
}

newUser();
newUser('David', 25,'MX');

// nueva forma en ECMAScritp 6 en adelante

function newAdmin(name = 'christiaan', age = 43, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Anna', 28, 'PE');
