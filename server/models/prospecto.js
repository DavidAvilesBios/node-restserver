var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var prospectoSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    apellido: { type: String, required: [true, 'El primero apellido es necesario'] },
    segundoApellido: { type: String, required: false },
    calle: { type: String, required:[true,'El nombre de la calle es necesario']},
    numeroCasa: { type: String, required:[true,'El numero de la casa es necesario']},
    colonia: { type: String, required:[true,'El nombre de la colonia es necesario']},
    codigoPostal: { type: String, required:[true,'El codigo postal es necesario'] },
    rfc: { type: String, required: [true, 'El rfc es necesario'] },
    estatus: {type: String, default: 'Enviado'}


});


module.exports = mongoose.model('Prospecto', prospectoSchema);