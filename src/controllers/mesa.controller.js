// FUNCIONAMIENTO DE TODAS LAS RUTAS DE MESAS
const models = require("../database/models/index");
module.exports = {

    listar: async (req, res, next) => {
        try {
            const mesas = await models.mesa.findAll()

            res.json({
                success: true,
                data: {
                    mesas: mesas
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            const mesa = await models.mesa.findOne({
                where: {
                    id: req.params.idMesa
                }
            })
            if (!mesa) return next(errors.MesaInexistente)

            res.json({
                success: true,
                data: {
                    mesa: mesa
                }
            })
        } catch (err) {
            return next(err)
        }
    },
    listarInfo2: async (req, res, next) => {
        try {
            const mesa = await models.mesa.findOne({
                where: {
                    numeroMesa: req.params.numeroMesa
                }
            })
            if (!mesa) return next(errors.MesaInexistente)

            res.json({
                success: true,
                data: {
                    mesa: mesa
                }
            })
        } catch (err) {
            return next(err)
        }
    },

    

    crear: async (req, res, next) => {
        try {
            const mesa= await models.mesa.create(req.body)
            res.json({
                success: true,
                data: {
                    id: mesa.id
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
                message: "Hola mesas !!!"
            })

        } catch (err) {
            console.log(err)
        }

    }

}