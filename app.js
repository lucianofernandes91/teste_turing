express = require('express');
var app = express();

app.get('/', (req,res) => {
    res.send('Funciona');
});

app.listen(80, () => {console.log(`rodando na porta 80`)});