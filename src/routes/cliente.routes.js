// RUTAS DE clientes

const router = require("express").Router(); // importar express.Router()

const clienteController = require('../controllers/cliente.controller') // importar el archivo de controladores de usuarios

const clienteEsquema = require('../middlewares/esquemas/cliente.esquema') // Chequeo de mi cliente
const validar = require('../middlewares/validaciones') // importa el middleware de validacion   

router.get('/prueba', clienteController.prueba) //http://localhost:5000/api/clientes/prueba
router.get('/', clienteController.listar)
router.post('/', validar(clienteEsquema.crearCliente), clienteController.crear) //
router.get('/buscar/:idCliente', clienteController.listarInfo)

module.exports = router;