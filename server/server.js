const express = require('express');
const bodyParser = require('body-parser');

const {ObjectID} = require('mongodb')
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/Todo');
var {User} = require('./model/User');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos,
            status: '5566 is good'
        }); 
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req,res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send('not valid id');
    }
    
    Todo.findById(id).then((todo) => {
      if(!todo){
        return res.status(404).send('not found');
      }
      res.send({todo});
    }).catch((e) => res.status(400).send('error happened')) 


    // res.send(req.params);
});

app.listen(3000, () => {
    console.log('Starting on port 3000');
});

module.exports.app = app;