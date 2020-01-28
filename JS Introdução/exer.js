var minhaidade = new Promise( (resolve, reject) => {
    let idade = 17

    if(idade >= 18){
        resolve('Maior de idade')
    } else {
        reject('Menor de idade')
    }
})

minhaidade.then( resultado => {
    console.log(resultado); //Maior de idade.
}, erro => {
    console.log(erro); //Menor de idade.
});