var pdf = require('html-pdf');
const { crearArchivo } = require ('./helpers/calculo')
const colors = require('colors')
//const argv = require('./config/yargs')
if(argv.t <= 5){
console.clear();

console.log(argv);



crearArchivo(tiempo, sueldo, nombre, apellido, argv.l)
                .then(console.log('Realizado exitosamente'))
                .catch(err => console.log(err))

   
}else{
    console.log('Calculo exitosa');
}