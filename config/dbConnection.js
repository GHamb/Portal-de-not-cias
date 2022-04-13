
var mysql = require('mysql');

var connMYSQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'portal_noticias',
        insecureAuth:true
    });
}
module.exports = function(){
    return connMYSQL;

}
