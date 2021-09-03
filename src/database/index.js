const mongoose = require('mongoose');

// criando a conexão com o bd e definindo o mongoClient 
mongoose.connect('mongodb://localhost/noderest');
mongoose.Promise = global.Promise;

module.exports = mongoose;