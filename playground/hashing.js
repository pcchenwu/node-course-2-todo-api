const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decode = jwt.verify(token, '123abc');
console.log('decoded', decode);

// var message = 'I am dodo';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
// console.log(token.data);
// token.data.id = 5;
// console.log(token.data);

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash ){
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed');
// }