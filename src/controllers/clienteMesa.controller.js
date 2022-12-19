const models = require("../database/models/index");
module.exports = {

    listar: async (req, res) => {
        try {
            const datos = await models.clienteMesa.findAll()

            res.json({
                success: true,
                data: {
                    clienteMesas: datos
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    listarInfo: async (req, res) => {
        try {
            const datos = await models.clienteMesa.findOne({
                where: {
                    "clienteId": req.params.clienteId
                }
            })

            res.json({
                success: true,
                data: {
                    clienteMesa: datos
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    crear: async (req, res) => {
        try {
            const clienteMesa = await models.clienteMesa.create(req.body)
            res.json({
                success: true,
                data: {
                    id: clienteMesa.id
                }
            })
        } catch (err) {
            return next(err)
        }
    },
    prueba: async (req, res) => {
        try {
            console.log('El clienteMesa esta satisfecho')

            res.json({
                message: "Estado del clienteMesa: Correcto!! "
            })

        } catch (err) {
            console.log(err)
        }

    }

}