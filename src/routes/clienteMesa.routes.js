// RUTAS DE clientes

const router = require("express").Router(); // importar express.Router()

const clienteMesaController = require('../controllers/clienteMesa.controller') // importar el archivo de controladores de usuarios

router.get('/prueba', clienteMesaController.prueba)
router.get('/', clienteMesaController.listar)
router.post('/', clienteMesaController.crear)
router.get('/buscar/:clienteId', clienteMesaController.listarInfo)

module.exports = router;