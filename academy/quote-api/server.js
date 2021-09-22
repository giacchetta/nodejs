const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

const api = express.Router();

app.use('/api', api);

api.get('/quotes/random', function(req,res){
    res.send(getRandomElement(quotes));
})

api.get('/quotes', function(req,res){
    if (req.query.person){        
        const obj = quotes.find(element => element.person === req.query.person)
        if (obj){
            res.send(obj.quote)
        } else {
            const arr = [];
            res.send(arr)
        }
    } else {
        res.send(quotes);
    }
})

api.post('/quotes', function(req,res){
    if (req.query.person && req.query.quote){
        const obj = {"quote" : req.query.quote, "person" : req.query.person };
        quotes.push(obj);
        res.send(obj);
    } else {
        res.status(400).send();
    }
})

app.listen(PORT);