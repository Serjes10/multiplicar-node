const multiplicar = require('./multiplicar');
const argv = require('../config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        multiplicar.listarTabla(argv.base, argv.limite).then(result => {
            return console.log(result);
        }).catch(err => console.log)
        break;

    case 'crear':
        multiplicar.crearArchivo(argv.base, argv.limite).then(archivo => {
            return console.log(`Archivo Creado: ${colors.red(archivo)}`);
        }).catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}
//let base = '5';
// console.log(process.argv);
// let argv2 = process.argv;
// console.log(argv2);
// console.log(argv.base);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(base);