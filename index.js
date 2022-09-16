//Importaciones
const express = require('express');
const dbConnect = require('./src/db/connection')

//Inicializaciones
const app = express();
dbConnect();

//Middlewares
app.use(express.json());

// Importación de rutas
app.use(require('./src/routes/home.routes'));
app.use(require('./src/routes/task.routes'));

//Puerto
const port = 7000;

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
