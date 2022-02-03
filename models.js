const mongoose = require('mongoose');

const armas = mongoose.model('armas',
  new mongoose.Schema({ modelo: String, calibre: String })
);

const municion = mongoose.model('municion',
  new mongoose.Schema({ calibre: String, tipo: String })
);

module.exports = {
  armas: armas,
  municion: municion
}

// Otra forma más corta:
// module.exports = {
//     Cliente,
//     Articulo
// }
