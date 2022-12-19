// FUNCIONAMIENTO DE TODAS LAS RUTAS DE cliente
const models = require("../database/models/index");
module.exports = {

    listar: async (req, res, next) => {
        try {
            const clientes = await models.cliente.findAll()

            res.json({
                success: true,
                data: {
                    clientes: clientes
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            const cliente= await models.cliente.findOne({
                where: {
                    id: req.params.idCliente
                }
            })
            if (!cliente) return next(errors.ClienteInexistente)

            res.json({
                success: true,
                data: {
                    cliente:cliente
                }
            })
        } catch (err) {
            return next(err)
        }
    },

    crear: async (req, res, next) => {
        try {
            const cliente = await models.cliente.create(req.body)
            res.json({
                success: true,
                data: {
                    id: cliente.id
                }
            })
        } catch (err) {
            return next(err)
        }
    },

    prueba: async (req, res) => {
        try {
            console.log('ejecutando prueba ')

            res.json({
                message: "Hola Clientes !!!"
            })

        } catch (err) {
            console.log(err)
        }

    }
}