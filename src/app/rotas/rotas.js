const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

const livroRotas = require('./livro-rotas');
const baseRotas = require('./base-rotas');

module.exports = (app) => {
    baseRotas(app);
    livroRotas(app);
};