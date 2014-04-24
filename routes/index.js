/*
 * GET home page.
 */

var Base = require("../modules/base.js"),

    formidable = require("formidable"),

    crypto = require("crypto"),

    fs = require("fs"),

    path = require("path"),

    util = require("util");

module.exports = function(app) {



    app.get('/', function(req, res) {
        res.render('index', {
            title: '飘飘'
        });
    });

    app.get('/login', function(req, res) {

        res.render('login', {
            title: '用户登录'
        });


    });

    app.post('/login', function(req, res) {



        if (req.body.username && req.body.password) {

            Base.UserModule.findOne({
                username: req.body.username,
            }, function(err, User) {

                if (err) {

                    console.log("用户名不存在！");

                    req.session.error = "用户名不存在！";

                    res.redirect("login");

                }

                if (User && User.username) {

                    console.log("用户名验证正确！");


                    if (User.password === req.body.password) {

                        console.log("密码验证正确");

                        console.log("登录成功");

                        req.session.user = User;

                        res.redirect("/home");

                    } else {

                        console.log("密码错误，请重新输入！");

                        req.session.error = "密码错误，请重新输入！";

                        res.redirect("login");


                    }

                }

            });


        } else {

            req.session.error = "用户名密码不能为空";
            res.redirect("/login");

        }


    });

    app.get('/loginout', function(req, res) {

        req.session.user = null;

        res.redirect("/");

    });

    app.get('/register', function(req, res) {

        res.render('register', {
            title: '注册页'

        });


    });

    app.post('/register', function(req, res) {


        if (req.body.username && req.body.password) {

            // var _user = new Base.UserModule({
            //     username: req.body.username,
            //     password: req.body.password
            // });

            Base.UserModule.findOne({
                username: req.body.username
            }, function(err, User) {

                if (User && User.username) {

                    console.log("用户名已经存在了！");

                    req.session.error = "用户名已经存在了！";

                    res.redirect("register");

                } else {

                    var _user = new Base.UserModule({
                        username: req.body.username,
                        password: req.body.password
                    });

                    _user.save();

                    req.session.user = _user;

                    res.redirect("/home");


                }

            });




        }



    });

    app.get('/home', function(req, res) {

        var user = {
            username: 'admin',
            password: 'admin'
        };
        res.render('home', {
            title: 'Home',
            user: user
        });


    });


    app.get('/upload', function(req, res) {
        res.render('upload', {
            title: '上传图片'
        });
    });



    app.post('/upload', function(req, res) {


        //path.join(path.resolve('publc'), path.join("/upload/", imageName));




        var form = new formidable.IncomingForm(),


            name = crypto.randomBytes(20).toString('hex');

        form.uploadDir = path.join(app.get("public"), "temp/");
        form.defer = true;

        // form.on('progress', function(recive, expected) {

        //     console.log("upload progress %s%", parseFloat(recive / expected) * 100);


        // });
        form.parse(req, function(err, fields, files) {

            if (err) throw err;

            name = name + '.' + (files.image.type).split('/')[1];

            var _path = path.join(path.join(app.get("public"), 'upload'), name);




            fs.renameSync(files.image.path, _path);

            // if (err) {//     throw err; // } // name += '.' + files.type; // console.log("files dir /n"); // console.dir(files); // console.log("files dir end /n"); // console.log(util.inspect(files, {//     showHidden: true // })); // setTimeout(function() {//     try {//         fs.renameSync(files.image.path, path.join(path.resolve('publc'), path.join("/upload/", name)), function(err) {//             if (err) {//                 throw err; //             } //             fs.exists(files.image.path, function(err) {//                 if (err) {//                     throw err; //                 } //                 fs.unlink(files.image.path, function(err) {//                     if (err) {//                         throw err; //                     } //                     res.redirect('upload'); //                 }); //             }); //         }); //     } catch (err) {//         throw err; //     } //     res.redirect('upload'); // }, 1000);
            res.writeHead(200, {
                'content-type': 'text/plain'
            });
            res.write('received upload:\n\n');
            res.end(util.inspect({
                fields: fields,
                files: files
            }));


            return;




        });







    });

    app.get('/raphael', function(req, res) {

        res.render("raphael", {
            title: "拉菲德莫"
        });


    });

    app.get('/rabing', function(req, res) {

        res.render("rabing", {
            title: "大饼"
        });


    });

    app.get('/back', function(req, res) {

        res.render("backbones", {
            title: "mi"
        });


    });




};