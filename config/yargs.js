const descripcion = {
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer',
    demand: true
};

const completado = {
    alias: 'c',
    type: 'boolean',
    desc: 'Marca la tarea como completada o pendiente',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};