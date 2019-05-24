module.exports = (app) => {


    app.get('/livros', function (req, resp) {
        resp.marko(
          require('../views/livros/lista/lista.marko')
        );
    });
};