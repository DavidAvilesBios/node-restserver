const express = require('express');

let app = express();

let Prospecto = require('../models/prospecto');

//==================
// Obtener productos
//==================

app.get('/prospecto', (req, res) => {

    Prospecto.find().exec((err, prospectos) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            prospectos
        });
    });


});

app.get('/prospecto/:id', (req, res) => {
    let id = req.params.id;

    Prospecto.findById(id, (err, prospectoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!prospectoDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El Id no es valido'
                }
            });
        }

        res.json({
            ok: true,
            producto: prospectoDB
        });
    });
});

app.post('/prospecto', (req, res) => {
    let body = req.body;

    let prospecto = new Prospecto({
        nombre: body.nombre,
        apellido: body.apellido,
        segundoApellido: body.segundoApellido,
        calle: body.calle,
        numeroCasa: body.numeroCasa,
        colonia: body.colonia,
        codigoPostal: body.codigoPostal,
        rfc: body.rfc
    });

    prospecto.save((err, prospectoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!prospectoDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            categoria: prospectoDB
        });
    });
});

app.put('/prospecto/:id', (req, res) => {

    let id = req.params.id;
    let body = req.body;

    let descProspecto = {
        nombre: body.nombre,
        apellido: body.apellido,
        segundoApellido: body.segundoApellido,
        calle: body.calle,
        numeroCasa: body.numeroCasa,
        colonia: body.colonia,
        codigoPostal: body.codigoPostal,
        rfc: body.rfc
    }

    Prospecto.findByIdAndUpdate(id, descProspecto , (err, prospectoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!prospectoDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No se encontro el prospecto para editar'
                }
            });
        }

        res.json({
            ok: true,
            prospecto: prospectoDB
        });

    });

});

app.put('/prospecto/:id/autorizado', (req, res) => {

    let id = req.params.id;
    let body = req.body;

    let descProspecto = {
        estatus:body.estatus
    }

    Prospecto.findByIdAndUpdate(id, descProspecto, (err, prospectoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!prospectoDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No se encontro el prospecto para editar'
                }
            });
        }

        res.json({
            ok: true,
            prospecto: prospectoDB
        });

    });

});
/*app.get('/producto/buscar/:termino', verificaToken, (req, res) => {
    let termino = req.params.termino;

    let regex = new RegExp(termino, 'i');

    Producto.find({ nombre: regex }).
    populate('categoria', 'nombre').exec((err, productos) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            productos
        });
    });
});

app.delete('/producto/:id', (req, res) => {
    let id = req.params.id;

    let cambiaEstado = {
        disponible: false
    }

    Producto.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, productoBorrado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        if (!productoBorrado) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Producto no encontrado'
                }
            })
        }

        res.json({
            ok: true,
            message: 'El producto ha sido borrado exitosamente'
        });
    });

});*/

module.exports = app;