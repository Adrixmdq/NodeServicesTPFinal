// RUTAS DE clientes

const router = require("express").Router(); // importar express.Router()

const mesaController = require('../controllers/mesa.controller') // importar el archivo de controladores de usuarios


router.get('/prueba', mesaController.prueba)
router.get('/', mesaController.listar)
router.post('/', mesaController.crear)
router.get('/buscar/:idMesa', mesaController.listarInfo)
router.get('/buscarMesa/:numeroMesa', mesaController.listarInfo2)

module.exports = router;