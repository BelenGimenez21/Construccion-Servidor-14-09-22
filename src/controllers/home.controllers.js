const ctrlHome = {};

ctrlHome.getHome = (req, res) =>{
    res.send({
        message: 'Peticion GET'
    })
};

ctrlHome.postHome = (req, res) =>{
    console.log(req.body)
    res.send({
        message: 'Peticion POST'
    })
};

ctrlHome.putHome = (req, res) =>{
    res.send({
        message: 'Peticion PUT'
    })
};

ctrlHome.deleteHome = (req, res) =>{
    res.send({
        message: 'Peticion DELETE'
    })
};

module.exports = ctrlHome;