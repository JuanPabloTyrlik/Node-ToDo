const argv = require('yargs').argv;

switch (argv._[0]) {
    case 'crear':
        console.log('Crear');
        break;
    case 'listar':
        console.log('listar');
        break;
    case 'actualizar':
        console.log('actualizar');
        break;

    default:
        console.log('Comando no reconocido');
        break;
}