const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {

    app.get('/livros', function (req, resp) {

        const livroDao = new LivroDao(db);

        livroDao.lista()
            .then(list => resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: list
                }
            ))
            .catch(erro => console.log(erro));

    });
};