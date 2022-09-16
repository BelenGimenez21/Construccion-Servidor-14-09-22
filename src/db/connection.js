const mongoose = require('mongoose');

const dbConnect = () => {
    try {
        mongoose.connect('mongodb+srv://beleng:beleng1@clusterprueba.n8exokc.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Conectado a la Base de Datos');
    } catch (error) {
        console.log('Error al conectar la Base de Datos');
        console.log(error.message);
    }
};

module.exports = dbConnect;