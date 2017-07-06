const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/model/Todo');
const {User} = require('./../server/model/User');

// var id = '595db44f430f7700185b693e';
var id ='595ca74bae5766a71489e5af';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

// Todo.find().then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id',todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if(!user){
        return console.log('Id not found');
    }
    console.log('User By Id',user);
}).catch((e) => console.log(e));