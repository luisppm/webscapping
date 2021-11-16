var app = require('./config/server');

app.get('/', function(req, res){
    
    console.log('Metodo get');
    res.status(200).send('Método get');

})

app.listen(process.env.PORT || 3000, function(req, res){
    console.log("Server rodando porta: 3000");
})