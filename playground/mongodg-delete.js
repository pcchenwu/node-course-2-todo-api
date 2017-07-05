// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // delete all
//    db.collection('Users').deleteMany({name:'DoDo'}).then((docs) => {
//         console.log('Users');
//         console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) => {
//         console.log('Unable to delete Users',err);
//     });
    // delete one
//    db.collection('Users').deleteOne({name:'PowerDoDo'}).then((docs) => {
//         console.log('Users');
//         console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) => {
//         console.log('Unable to delete Users',err);
//     });
    // find one and delete
   db.collection('Users').findOneAndDelete({name:'PowerDoDo'}).then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to delete Users',err);
    });
    db.close();
});