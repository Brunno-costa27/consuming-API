const cors = require('cors');
const express = require('express');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/', async (req,res) => {
    
    try {

        //Response é a resposta do axios , mas eu tiro o data de dentro do response com a desestruturação
        const { data } = await axios('https://jsonplaceholder.typicode.com/users');
        return res.json(data);

    } catch (error) {
        console.log('Errou!');
    }



});

app.listen('8080', () => {
    console.log('sevidor rodando!');
})