var mongoose = require('mongoose');

var conn = mongoose.createConnection('127.0.0.1', 'np');

conn.on('error', console.error.bind(console, '连接错误'));

conn.once('open', function() {
    console.log('DB Connection open!');
});

var Schema = mongoose.Schema;

var UserSchema = new Schema({

    username: {
        type: String,
        index: true
    },

    password: {
        type: String,

    },

    name: {
        type: String,
        index: true
    },

    phone: {
        type: Number,
        index: true
    },

    email: {

        type: String,

        index: true
    },

    pic: {

        type: [],

    },
    date: {

        type: Date,

        default: Date.now

    }

});


//(schema static method )  module  level  method

UserSchema.statics.findByName = function(name, cb) {

    this.find({
            name: new RegExp(name, 'i')
        }, cb

    );


};

UserSchema.statics.findByUserName = function(UserName, cb) {

    this.find({
            username: new RegExp(UserName, 'i')
        }, cb

    );


};

UserSchema.statics.findByEmail = function(email, cb) {

    this.find({
            email: new RegExp(name, 'i')
        }, cb

    );


};

UserSchema.statics.findByPhone = function(phone, cb) {

    this.find({
            phone: new RegExp(phone, 'i')
        }, cb

    );


};



//var UserModule = mongoose.model('User', UserSchema);

var TagSchema = new Schema({


    name: {

        type: "String",

        required: true
    },


});

TagSchema.statics.findByName = function(name, cb) {

    this.find({
        name: new RegExp(name, "i")
    }, cb);

};




var ArticleSchema = new Schema({

    title: {

        type: 'String',
        required: true

    },

    description: {


        type: 'String',
        required: true

    },

    tagId: {


        type: [{
            type: Schema.Types.ObjectId,
            ref: "Tag"
        }],
        required: 'true'


    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }




});

//var ArticleModule = mongoose.model('Article', ArticleSchema);

module.exports = {


    UserModule: conn.model('User', UserSchema),

    TagModule: conn.model('Tag', TagSchema),

    ArticleModule: conn.model('Article', ArticleSchema)


};