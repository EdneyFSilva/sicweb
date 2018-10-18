const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.status(200).send({message: 'Olá mundo v2!!!'});
})
app.listen(3001, ()=>{
    console.log('api rodando na porta 3001')
})
