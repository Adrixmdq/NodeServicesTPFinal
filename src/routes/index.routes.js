// SE ENCARGA DE CONECTAR TODAS LAS RUTAS

const { Router } = require("express") // importar express

const usuarioRoutes = require("./usuario.routes") // importar el archivo de rutas de usuarios
const clienteRoutes = require("./cliente.routes") // importar el archivo de rutas de cliente
const mesaRoutes = require("./mesa.routes") // importar el archivo de rutas de cliente
const clienteMesaRoutes = require("./clienteMesa.routes") // importar el archivo de rutas de cliente
const authRoutes = require('./auth.routes')
const decodeJWT = require('../middlewares/decodeJWT')



const rutas_init = () => { // aca se ponen todas las rutas que existen
  const router = Router() // crear una instancia de express.Router()

  router.use("/usuarios", decodeJWT,usuarioRoutes) // para acceder a las rutas de usuarios de la api siempre deberá empezar con /usuarios
  router.use("/clientes",  decodeJWT, clienteRoutes) // para acceder a las rutas de clientes  de la api siempre deberá empezar con /clientes
  router.use("/mesas",  decodeJWT,mesaRoutes) // para acceder a las rutas de mesas  de la api siempre deberá empezar con /mesas
  router.use("/clienteMesas",  decodeJWT,clienteMesaRoutes)

  return router // retornar el router
};
// por cuestiones de seguridad se separan las rutas
const rutas_auth = () => {
  const router = Router();
  router.use("/auth", authRoutes)
  return router

}
module.exports = { rutas_init, rutas_auth } // exportar el archivo de rutas de la api
