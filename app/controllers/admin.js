module.exports.formulario_inclusao_noticia = function (app, req, res) {
    res.render('admin/formulario_inclusao_noticia',{validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function (app,req,res) {

    var noticia = req.body;

        req.assert('titulo','Título é obrigatório').notEmpty();
        req.assert('resumo','Resumo é obrigatório').notEmpty();
        req.assert('resumo','deve conter de 10 a 100 caracteres no resumo').notEmpty();
        req.assert('autor','Autor é obrigatório').notEmpty();
        req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format:'YYYY-MM-DD'});
        req.assert('noticia','Notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if (erros) {
            res.render('admin/formulario_inclusao_noticia',{validacao: erros, noticia: noticia});
            return;
        }



        var connection = app.config.dbConnection();

        var noticiasModel = new app.app.models.NoticiasDAO(connection);
        
        noticiasModel.salvarNoticia(noticia,function(error, result){
            if (error) {
                console.error('error connecting: ' + error.stack);
                return;
            }
            console.log('connected as id ' + connection.threadId);

            res.redirect('/noticias');


            console.log(result)
        
        });
    
}