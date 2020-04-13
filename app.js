const argv = require('./config/yargs').argv;
const colors = require('colors');

const toDo = require('./to-do/to-do');

switch (argv._[0]) {
    case 'crear':
        toDo.crear(argv.descripcion);
        break;
    case 'listar':
        console.log('========== Tareas =========='.green);
        for (let tarea of toDo.getListado()) {
            console.log(`${tarea.descripcion}`);
            console.log(`Estado: ${(tarea.completado) ? 'Completado' : 'Pendiente'}`);
            console.log('============================'.green);
        }
        break;
    case 'actualizar':
        toDo.actualizar(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        toDo.borrar(argv.descripcion);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}