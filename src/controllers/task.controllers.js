const ctrlTask = {};

ctrlTask.getTask = (req, res) =>{
    res.send({
        message: 'Peticion GET'
    })
};

// ctrlTask.postTask = (req, res) =>{
//     console.log(req.body)
//     res.send({
//         message: 'Peticion POST'
//     })
// };

// Controlador para crear una nueva tarea en la Base de Datos.
ctrlTask.postTask = async (req, res) => {
    // Se obtienen los datos enviados por método POST
    const { name, description } = req.body;

    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    const newTask = new Task({
        name,
        description
    });

    // Se almacena en la base de datos con método asícrono .save()
    const task = await newTask.save();
    
    // Se devuelve una respuesta al cliente con un mensaje y los datos de la tarea creada.
    return res.json({
        msg: 'Tarea creada correctamente',
        task
    });
};

ctrlTask.putTask = (req, res) =>{
    res.send({
        message: 'Peticion PUT'
    })
};

ctrlTask.deleteTask = (req, res) =>{
    res.send({
        message: 'Peticion DELETE'
    })
};

module.exports = ctrlTask;