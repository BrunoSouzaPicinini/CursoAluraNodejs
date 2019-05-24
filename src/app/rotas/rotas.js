module.exports = (app) => {


    app.get('/livros', function (req, resp) {
        resp.marko(
          require('../views/livros/lista/lista.marko'),
            {
                livros : [
                    {
                        id: 1,
                        titulo: 'Fundamentos de Node'
                    },
                    {
                      id: 2,
                      titulo: 'Node Avançado'
                    }
                ]
            }
        );
    });
};