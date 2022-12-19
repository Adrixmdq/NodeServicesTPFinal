// SEEDER PARA CARGAR USUARIOS EN LA BASE DE DATOS

'use strict';

const models = require("../models/index");
const bcrypt = require('bcryptjs')

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.usuario.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Juan",
                    apellido: "Gonzalez",
                    email: "emailJuan@email.com",
                    password: "",
                    edad: 25
                }
            }),
            models.usuario.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Pedro",
                    apellido: "Gomez",
                    email: "emailPedro@email.com",
                    password: "",
                    edad: 67
                }
            }),
            models.usuario.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                    nombre: "adrian",
                    apellido: "recio",
                    email: "adrian@email.com",
                    password: bcrypt.hashSync('password', 10),
                    edad: 53
                }
            }),
            
            models.cliente.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Adrian",
                    apellido: "Recio",
                    email: "ar@email.com",
                    password: "",
                    edad: 53
                }
            }),
            models.cliente.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    nombre: "Augusto",
                    apellido: "Recio",
                    email: "aur@email.com",
                    password: "",
                    edad: 17
                }
            }),
            models.mesa.findOrCreate({
                where: {
                    numeroMesa: 100
                },
                defaults: {
                    numeroMesa: 100,
                    juego: "ruleta",
                    tipoMesa: "comun",
                }
            }),
            models.mesa.findOrCreate({
                where: {
                    numeroMesa: 200
                },
                defaults: {
                    numeroMesa: 200,
                    juego: "ruleta",
                    tipoMesa: "intermedia",
                }
            }),
            models.mesa.findOrCreate({
                where: {
                    numeroMesa: 300
                },
                defaults: {
                    numeroMesa: 300,
                    juego: "ruleta",
                    tipoMesa: "especial",
                }
            }),   
            models.clienteMesa.findOrCreate({
                where: {
                    id: 2
                },
                defaults: {
                    clienteId: 1,
                    mesaId: 1,
                }
            }),
            models.clienteMesa.findOrCreate({
                where: {
                    id: 3
                },
                defaults: {
                    clienteId: 2,
                    mesaId: 2,
                }
            }),
            models.clienteMesa.findOrCreate({
                where: {
                    id: 4
                },
                defaults: {
                    clienteId: 2,
                    mesaId: 1,
                }
            })

        ])
    },
};