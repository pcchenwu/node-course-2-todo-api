const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            //   validator: (value) => {
            //       return validator.isEmail(value);
            //   },
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    token: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
}

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({ _id: user._id.toHexString(), access }, 'abc').toString();

    user.token.push({ access, token });

    return user.save().then(() => {
        return token;
    });
};

UserSchema.statics.findByToken = function (token) {
    var User = this;
    var decoded;

    try {
        decoded = jwt.verify(token, 'abc');
    } catch (e) {
        //   return new Promise((resolve, reject) => {
        //       reject();
        //   });
        return Promise.reject();
    }

    return User.findOne({
        '_id': decoded._id,
        'token.token': token,
        'token.access': 'auth'
    });
}

UserSchema.pre('save', function (next) {
    var user = this;
    // console.log('pre');
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
                // console.log('hash',hash);
            });
        });
    } else {
        // console.log('else');
        next();
    }
})

var User = mongoose.model('User', UserSchema);

module.exports = { User };