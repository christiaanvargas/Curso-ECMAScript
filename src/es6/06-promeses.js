const anotheFunction = ()=>{
    return new Promise((resolve, reject)=>{
        if (true){
            resolve('Hey!!');
        } else {
            reject('Whooooops');
        }
    })
}

anotheFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));