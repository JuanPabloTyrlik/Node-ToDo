const fs = require('fs');

let tareas = [];

const guardarDB = () => {
    let data = JSON.stringify(tareas);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar', err);
        }
    });
};

const cargarDB = () => {
    try {
        tareas = require('../db/data.json');
    } catch (error) {
        tareas = [];
    }
};

const getListado = () => {
    cargarDB();
    return tareas;
};

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    tareas.push(porHacer);
    guardarDB();
    return porHacer;
};

const actualizar = (descripcion, completado) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado
    };
    let index = tareas.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index >= 0) {
        tareas.splice(index, 1, porHacer);
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();
    let index = tareas.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index >= 0) {
        tareas.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
};

module.exports = {
    crear,
    actualizar,
    getListado,
    borrar
};