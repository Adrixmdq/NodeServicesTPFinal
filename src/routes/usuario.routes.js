// RUTAS DE USUARIOS

const router = require("express").Router(); // importar express.Router()

const usuarioController = require('../controllers/usuario.controller') // importar el archivo de controladores de usuarios

const usuarioEsquema = require('../middlewares/esquemas/usuario.esquema') // Chequeo de mi usuario
const validar = require('../middlewares/validaciones') // importa el middleware de validacion  
                 
router.get('/prueba', usuarioController.prueba)
router.get('/', usuarioController.listar)
router.post('/',usuarioController.crear)//validar(usuarioEsquema.crearUsuario),  
router.get('/buscar/:idUsuario', usuarioController.listarInfo)
module.exports = router;