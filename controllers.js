const { armas, municion } = require("./models.js");


// ------- Armas

exports.readArmas = (req, res) =>
    armas.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readArma = (req, res) =>
    armas.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteArma = (req, res) =>
    armas.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.updateArma = (req, res) =>
    armas.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { modelo: req.body.modelo, calibre: req.body.calibre } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createArma = (req, res) =>
    new armas({ modelo: req.body.modelo, calibre: req.body.calibre })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



// ------ Municion

exports.readMuniciones = (req, res) =>
    municion.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.readMunicion = (req, res) =>
    municion.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });


exports.deleteMunicion = (req, res) =>
    municion.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });



exports.updateMunicion = (req, res) =>
    municion.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { calibre: req.body.calibre, tipo: req.body.tipo } }, 
        (err, data) => {
            if (err) res.json({ error: err });
            else     res.json(data);
        }
    );


exports.createMunicion = (req, res) =>
    new municion({ calibre: req.body.calibre, tipo: req.body.tipo })
    .save((err, data) => {
        if (err) res.json({ error: err });
        else     res.json(data);
    });

