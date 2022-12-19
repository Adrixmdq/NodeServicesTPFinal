# nodeServidesTp2

# Orm para mapear los obj a modelo relacional
npm install --save sequelize

# driver postgres
npm install --save pg pg-hstore

# funcionalidades de sequelize, como ejecutar seeders y migraciones
npm install sequelize-cli

# Creo las estructuras en vas al  .sequelizerc
npx sequelize-cli init

# pedido cuando quise crear las tablas
npm i mysql2

npx sequelize-cli db:create

# datos de pruebas seeders 
npx sequelize-cli seed:generate --name loteDePruebas01

# Ejecutar semilla
npx sequelize-cli db:seed:all

# validar esquemas
npm install join

# test
http://localhost:5001/api/usuarios/buscar/2

# up down archivos
npm  i multer

# encriptar contraseña
npm i bcryptjs

# autenticar usuario
npm i jsonwebtoken