const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/model/Todo');
const {User} = require('./../server/model/User');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });
Todo.findOneAndRemove({_id:'595f51ebae5766a7148a2698'}).then((todo) => {
    console.log(todo);
});


Todo.findByIdAndRemove('595f51ebae5766a7148a2698').then((todo) => {
    console.log(todo);
});