# PROMESAS

Una promesa es una forma de manejar el asincronismo en JavaScript y se representa como un objeto que puede generar un valor único a futuro, que tiene dos estados, o está resuelta o incluye una razón por la cual no ha sido resuelta la solicitud.

## Cómo Utilizar las Promesas

Solamente ten presente que la clase _Promise_ y sus métodos _then y catch_ fueron añadidos en ES6. Esto resuelve un problema del manejo del asincronismo con _callbacks_, llamado **Callback Hell**.

El argumento de la clase Promise es una función que recibe dos parámetros:

- resolve: cuando la promesa es resuelta.
- reject: cuando la promesa es rechazada.

Puedes utilizar cualquier nombre, siempre y cuando sepas su funcionamiento.

```
const promesa = () => {
  return new Promise((resolve, reject) => {
    if (something) {
      //true o false
      resolve("Se ha resuelto la promesa")
    } else {
      reject("Se ha rechazado la promesa")
    }
  })
}

promesa()
  .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
  .catch(error => console.log(error)) //En caso que se ejecute reject
```

## Cursos para Entender el Asincronismo en JavaScript

Si aún no sabes en qué consiste el asincronismo, no te preocupes, existen cursos completos de este tema.

- Curso de JavaScript Engine (V8) y el Navegador
- Curso de Asincronismo con JavaScript

> Contribución creada por Andrés Guano (Platzi Contributor).

### Lecturas Recomendadas

[Curso de Asincronismo con JavaScript](https://platzi.com/cursos/asincronismo-js/ "Curso de Asincronismo con JavaScript") de [Platzi](https://platzi.com/ "Platzi").
