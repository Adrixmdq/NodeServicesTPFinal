// TIENE TODA LA CONFIGURACION DE LA API

const express = require('express') // importar express
const routerConfig = require('./routes/index.routes.js') // importar el archivo de rutas
const globalConstants = require('./const/globalConstants.js') // importar el archivo de constantes globales
const depuradorMorgan = require('morgan')

const errorHandler = require('./middlewares/error')
let createError = require('http-errors')  // libreria http para crear nuestros propios errores

const configuracionApi = (app) => { // configurar la api
  app.use(express.json()) // para que la api pueda recibir json
  app.use(express.urlencoded({ extended: true })) // para que la api pueda recibir formularios
  app.use(depuradorMorgan('dev'))

  return;
};

const configuracionRouter = (app) => { // configurar las rutas
  
  app.use('/api/', routerConfig.rutas_init())
  // le pongo prefijo de api, para diferenciar el llamado del front de usuarios /usuarios 
  // al de la ruta del backend /api/usuario
  // de esta manera cuando pongo /api/ me responde rutas_init
  // que a la vez re rutea segun el segundo nivel de / 
  // para acceder a las rutas de la api siempre deberá empezar con /api/
  
  // la idea que siempre que le pongo barravaya  al login
  app.use('/', routerConfig.rutas_auth())
    app.use(function (req, res, next) {
      next(createError(404)) //si no se encuentra la ruta devuelve el error correspondiente, 404
     })
  app.use(errorHandler)
};

const init = () => {
  const app = express() // crear una instancia de express
  configuracionApi(app) // configurar la api
  configuracionRouter(app) // configurar las rutas
  app.listen(globalConstants.PORT) // escuchar en el puerto
  console.log('La aplicacion se está ejecutando en el puerto:' + globalConstants.PORT) // mostrar en consola que se está ejecutando la aplicación en el puerto correspondiente
};

init(); // iniciar la aplicación
