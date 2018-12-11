const formmodel = require('../Model/formModel');

exports.Send = (req,res) =>{
    formmodel.CreateForm(req.body)
    .then((result)=>{
        res.status(201).send({id: result._id});
    });
}

exports.getter = (req,res) => {
        formmodel.SendFomrs().then((result) => {
            res.status(201).send(result);
        });
}