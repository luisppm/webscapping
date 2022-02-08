var app = require('./config/server');
const main = require('./imoveis');


app.get('/', function(req, res){    
    console.log('Metodo get');
    res.status(200).send('Método get');
})

app.get('/imoveis-alugar', function(req, res){
    //main();
    res.status(200).send('Imóveis');
})
/*
app.listen(process.env.PORT || 3000, function(req, res){
    console.log("Server rodando porta: 3000");
})*/