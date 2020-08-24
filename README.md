# Aplicación MERN (MongoDB, Express, React, Node)

![](https://firebasestorage.googleapis.com/v0/b/eedh-mern-test.appspot.com/o/mern.png?alt=media&token=7ec89300-78d7-4da2-8dfc-8662877af486)

Este proyecto es una demostración de como realizar un frontend en React conectado a un backend en Express que utiliza una base de datos en MongoDB.

- [Aplicación MERN (MongoDB, Express, React, Node)](#aplicación-mern-mongodb-express-react-node)
- [Funcionamiento del backend](#funcionamiento-del-backend)
- [Funcionamiento del frontend](#funcionamiento-del-frontend)
- [Requisitos](#requisitos)

# Funcionamiento del backend

Primero se debe crear un archivo .env donde se especifica la ruta hacia la base de datos. Para este proyecto se utilizó una instancia de MongoDB Atlas.

```
ATLAS_URI=mongodb+srv://<cluster>:<password>@<host>.c5fxc.mongodb.net/<db_name>?retryWrites=true&w=majority

ATLAS_URI=mongodb+srv://cluster01:cluster01Password@cluster01.c5fxc.mongodb.net/db_mp?retryWrites=true&w=majority
```

A continuación se instalan las dependencias y se inicia el servidor, el puerto utilizado es el 5000.

```
cd backend
npm install
nodemon server.js
```

# Funcionamiento del frontend

Similar al backend se instalan las dependencias y se inicia el servidor, el puerto utilizdo es el 3000.

```
cd frontend
npm install
npm start
```

# Requisitos

- Dependencia   | Versión utilizada
- nodejs        | v12.18.3
- npm           | v6.14.6
- nodemon       | v2.0.4
- mongodb       | v4.4.0
- react         | 16.13.1