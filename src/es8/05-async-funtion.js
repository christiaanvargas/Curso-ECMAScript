const fnAsync = () => {
    return new Promise((resolver, reject)=>{
        (true)
            ? setTimeout(()=>resolver('AsynC !!'), 2000)
            : reject (new Error('Error!'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');