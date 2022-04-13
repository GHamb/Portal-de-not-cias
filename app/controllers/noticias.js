module.exports.noticias = function (app,req,res) {

    var connection = app.config.dbConnection();

        var noticiasModel = new app.app.models.NoticiasDAO(connection);
        
        noticiasModel.getNoticias( function(error, result){
            if (error) {
                console.error('error connecting: ' + error.stack);
                return;
              }
              console.log('connected as id ' + connection.threadId);

              res.render('noticias/noticias',{noticias:result});


            console.log(result)
        
        });
    
}

module.exports.noticia = function (app,req,res) {

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, function(error, result){
        console.log(result)
        res.render('noticias/noticia', { noticia : result });
        
    });
    
}