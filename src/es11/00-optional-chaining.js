const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

/* Ejemplo 1 de accesar alos datos */
console.log(users.gndx.country);

/* Cuando el valor que se intenta accesar no existe */
console.log(users.ana.age); /* devuelve un valor undefined */

/* cuando se intenta aceder a un valor que no existe */
/* console.log(users.pericles.age); //devuelve un Type error */

/* como verificar si un valor está definido */
console.log(users?.pericles?.age);