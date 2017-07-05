// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('595c5e05417b5510ef2355f8')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2)); 
    // }, (err) => {
    //     console.log('Unable to fetch todos',err);
    // });

    db.collection('Users').count({name: 'DoDo'}).then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2)); 
    }, (err) => {
        console.log('Unable to fetch todos',err);
    });

    db.close();
});