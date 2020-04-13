const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer',
            demand: true
        }
    })
    .command('actualizar', 'Actualiza el estado de una tarea por hacer', {
        descripcion: {
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer',
            demand: true
        },
        completado: {
            alias: 'c',
            type: 'boolean',
            desc: 'Marca la tarea como completada o pendiente',
            default: true
        }
    })
    .command('borrar', 'Borra una tarea por hacer', {
        descripcion: {
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};