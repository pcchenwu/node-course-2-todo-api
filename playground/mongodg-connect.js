// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Nothing to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //       return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'DoDo',
        age: '28',
        location: 'Neihu'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert Users',err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    db.close();
});