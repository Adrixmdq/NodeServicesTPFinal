module.exports = (esquema) => {

    return (req, res, next) => {
        let result = esquema.validate(req.body) // valida los datos de entrada con el esquema

        if (result.error) { // si hay error
            next(result.error) // envia el error al controlador
        } else { // si no hay error
            next() // continua con la ejecucion del controlador
        }
    }

}

