//Importaciones
const express = require('express');

//Inicializaciones
const app = express()

//Middlewares
app.use(express.json());

// Importación de rutas
app.use(require('./src/routes/home.routes'));

//Puerto
const port = 7000;

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
