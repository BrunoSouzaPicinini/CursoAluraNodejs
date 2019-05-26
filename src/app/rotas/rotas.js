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


    app.get('/livros/form', function(req, resp) {
        resp.marko(require('../views/livros/form/form.marko'), { livro: {} });
    });

    app.get('/livros/form/:id', function(req, resp) {
        const id = req.params.id;
        const livroDao = new LivroDao(db);

        livroDao.buscaPorId(id)
            .then(livro =>
                resp.marko(
                    require('../views/livros/form/form.marko'),
                    { livro: livro }
                )
            )
            .catch(erro => console.log(erro));

    });

    app.post('/livros', function (req, resp) {
        console.log('adicionando');
        console.log(req.body);

        const livroDao = new LivroDao(db);

        livroDao.adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));

    });

    app.put('/livros', function (req, resp) {
        console.log('atualizando');
        console.log(req.body);

        const livroDao = new LivroDao(db);

        livroDao.atualiza(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));

    });

    app.delete('/livros/:id', function(req, resp) {
        const id = req.params.id;
        const livroDao = new LivroDao(db);

        livroDao.remove(id)
            .then( () => resp.status(200).end())
            .catch( erro => console.log(erro));
    });

};