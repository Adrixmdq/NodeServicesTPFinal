// rutas auth
const router = require("express").Router()
const authController = require('../controllers/auth.controller')
const validar = require('../middlewares/validaciones') // importa el middleware de validacion  
const authScheme = require('../middlewares/esquemas/auth.esquema')

router.get('/',  authController.prueba) /
router.get('/login',  validar(authScheme.login),authController.login) //,
router.post('/registrarse', authController.registrarse)

module.exports = router