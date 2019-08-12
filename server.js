
// var mongojs = require('mongojs');
// var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

//--------------------DB-------------------------------//
var mongoose = require('mongoose');
var dbName = 'sma';
var connectionString = 'mongodb://localhost:27017/' + dbName;
mongoose.connect(connectionString);
var Test = require('./principal/models/model1');
var Testb = require('./principal/models/model2');
var Testr = require('./principal/models/modelr');
var Testh = require('./principal/models/modelh');
var Tests = require('./principal/models/models');
var Testc = require('./principal/models/modelc');


//-------------------------------------------------------//
var express = require('express');
var app = express();
var session = require('express-session');
var flash = require('connect-flash');


app.use(flash());
app.use(session({ cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false}));

app.use(express.static(__dirname + "/principal"));

app.use(bodyParser.json());
//----------autenticacion------------------//


//-----------------------controles- obtener----------//

app.get('/contactlist',function (req, res) {
    console.log("I received a GET request");

    Test.find(function (err,docs) {
        console.log(docs);
        res.json(docs);
    });
});
app.get('/listbanco',function (req, res) {
    console.log("I received a GET request");

    Testb.find(function (err,docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.get('/listrestaurante',function (req, res) {
    console.log("I received a GET request");

    Testr.find(function (err,docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.get('/listhotel',function (req, res) {
    console.log("I received a GET request");

    Testh.find(function (err,docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.get('/listbare',function (req, res) {
    console.log("I received a GET request");

    Tests.find(function (err,docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.get('/listcentro',function (req, res) {
    console.log("I received a GET request");

    Testc.find(function (err,docs) {
        console.log(docs);
        res.json(docs);
    });
});

///-------controlles ver-------/////
app.post('/contactlist',function(req, res){
    console.log(req.body);
    // db.contactlist.insert(req.body, function (err,doc) {
    //     res.json(doc);
    // })
    var test = new Test(req.body);
    test.save(function(err,doc) {
        if (err) {
            return res.send(err);
        } else {
            req.flash('success', 'Your name was updated');
        }
        res.json(doc);
    });
});
app.post('/listbanco',function(req, res){
    console.log(req.body);
    // db.contactlist.insert(req.body, function (err,doc) {
    //     res.json(doc);
    // })
    var testb = new Testb(req.body);
    testb.save(function(err,doc) {
        if (err) {
            return res.send(err);
        } else {
            req.flash('success', 'Your name was updated');
        }
        res.json(doc);
    });
});

app.post('/listrestaurante',function(req, res){
    console.log(req.body);
    // db.contactlist.insert(req.body, function (err,doc) {
    //     res.json(doc);
    // })
    var testr = new Testr(req.body);
    testr.save(function(err,doc) {
        if (err) {
            return res.send(err);
        } else {
            req.flash('success', 'Your name was updated');
        }
        res.json(doc);
    });
});

app.post('/listhotel',function(req, res){
    console.log(req.body);
    // db.contactlist.insert(req.body, function (err,doc) {
    //     res.json(doc);
    // })
    var testh = new Testh(req.body);
    testh.save(function(err,doc) {
        if (err) {
            return res.send(err);
        } else {
            req.flash('success', 'Your name was updated');
        }
        res.json(doc);
    });
});

app.post('/listbare',function(req, res){
    console.log(req.body);
    // db.contactlist.insert(req.body, function (err,doc) {
    //     res.json(doc);
    // })
    var tests = new Tests(req.body);
    tests.save(function(err,doc) {
        if (err) {
            return res.send(err);
        } else {
            req.flash('success', 'Your name was updated');
        }
        res.json(doc);
    });
});

app.post('/listcentro',function(req, res){
    console.log(req.body);
    // db.contactlist.insert(req.body, function (err,doc) {
    //     res.json(doc);
    // })
    var testc = new Testc(req.body);
    testc.save(function(err,doc) {
        if (err) {
            return res.send(err);
        } else {
            req.flash('success', 'Your name was updated');
        }
        res.json(doc);
    });
});


//------------------controles --Eliminar-----/
app.delete('/contactlist/:id' ,function (req, res) {
    // var id = req.params.id;
    // console.log(id);
    // db.contactlist.remove({_id: mongojs.ObjectId(id)},function (err, doc) {
    //     res.json(doc);
    // })
    Test.remove({_id: req.params.id}, function(err, doc) {
        if (err) {
            return res.send(err);
        }
        res.json(doc);
    });
});
app.delete('/listbanco/:id' ,function (req, res) {
    // var id = req.params.id;
    // console.log(id);
    // db.contactlist.remove({_id: mongojs.ObjectId(id)},function (err, doc) {
    //     res.json(doc);
    // })
    Testb.remove({_id: req.params.id}, function(err, doc) {
        if (err) {
            return res.send(err);
        }
        res.json(doc);
    });
});

app.delete('/listrestaurante/:id' ,function (req, res) {
    // var id = req.params.id;
    // console.log(id);
    // db.contactlist.remove({_id: mongojs.ObjectId(id)},function (err, doc) {
    //     res.json(doc);
    // })
    Testr.remove({_id: req.params.id}, function(err, doc) {
        if (err) {
            return res.send(err);
        }
        res.json(doc);
    });
});

app.delete('/listhotel/:id' ,function (req, res) {
    // var id = req.params.id;
    // console.log(id);
    // db.contactlist.remove({_id: mongojs.ObjectId(id)},function (err, doc) {
    //     res.json(doc);
    // })
    Testh.remove({_id: req.params.id}, function(err, doc) {
        if (err) {
            return res.send(err);
        }
        res.json(doc);
    });
});

app.delete('/listbare/:id' ,function (req, res) {
    // var id = req.params.id;
    // console.log(id);
    // db.contactlist.remove({_id: mongojs.ObjectId(id)},function (err, doc) {
    //     res.json(doc);
    // })
    Tests.remove({_id: req.params.id}, function(err, doc) {
        if (err) {
            return res.send(err);
        }
        res.json(doc);
    });
});

app.delete('/listcentro/:id' ,function (req, res) {
    // var id = req.params.id;
    // console.log(id);
    // db.contactlist.remove({_id: mongojs.ObjectId(id)},function (err, doc) {
    //     res.json(doc);
    // })
    Testc.remove({_id: req.params.id}, function(err, doc) {
        if (err) {
            return res.send(err);
        }
        res.json(doc);
    });
});


//--- controles  Buscar para actualizar---////
app.get('/contactlist/:id', function (req, res) {
    // var id = req.params.id;
    // console.log(id);
    // db.contactlist.findOne({_id: mongojs.ObjectId(id)},function (err,doc) {
    //     res.json(doc);
    // })
    Test.findOne({ _id: req.params.id},{"name" :1}, function(err, doc) {
        if (err) {
            return res.send(err);
        }
        res.json(doc);
    });
});
app.get('/listbanco/:id', function (req, res) {
    // var id = req.params.id;
    // console.log(id);
    // db.contactlist.findOne({_id: mongojs.ObjectId(id)},function (err,doc) {
    //     res.json(doc);
    // })
    Testb.findOne({ _id: req.params.id},{"name" :1}, function(err, doc) {
        if (err) {
            return res.send(err);
        }
        res.json(doc);
    });
});

app.get('/listrestaurante/:id', function (req, res) {
    // var id = req.params.id;
    // console.log(id);
    // db.contactlist.findOne({_id: mongojs.ObjectId(id)},function (err,doc) {
    //     res.json(doc);
    // })
    Testr.findOne({ _id: req.params.id},{"name" :1}, function(err, doc) {
        if (err) {
            return res.send(err);
        }
        res.json(doc);
    });
});

app.get('/listhotel/:id', function (req, res) {
    // var id = req.params.id;
    // console.log(id);
    // db.contactlist.findOne({_id: mongojs.ObjectId(id)},function (err,doc) {
    //     res.json(doc);
    // })
    Testh.findOne({ _id: req.params.id},{"name" :1}, function(err, doc) {
        if (err) {
            return res.send(err);
        }
        res.json(doc);
    });
});

app.get('/listbare/:id', function (req, res) {
    // var id = req.params.id;
    // console.log(id);
    // db.contactlist.findOne({_id: mongojs.ObjectId(id)},function (err,doc) {
    //     res.json(doc);
    // })
    Tests.findOne({ _id: req.params.id},{"name" :1}, function(err, doc) {
        if (err) {
            return res.send(err);
        }
        res.json(doc);
    });
});

app.get('/listcentro/:id', function (req, res) {
    // var id = req.params.id;
    // console.log(id);
    // db.contactlist.findOne({_id: mongojs.ObjectId(id)},function (err,doc) {
    //     res.json(doc);
    // })
    Testc.findOne({ _id: req.params.id},{"name" :1}, function(err, doc) {
        if (err) {
            return res.send(err);
        }
        res.json(doc);
    });
});

/// controlles --para ver todo el objeto////

app.put('/contactlist/:id',function (req,res) {
   //  var id = req.params.id;
   // console.log(req.body.name);
   //  db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
   //  update: {$set: {name: req.body.name, email:req.body.email, number:req.body.number}},
   //      new: true},function (err,doc) {
   //      res.json(doc);
   //  });
    Test.findOne({ _id: req.params.id }, function(err, doc) {
        if (err) {
            return res.send(err);
        }
        for (prop in req.body) {
            doc[prop] = req.body[prop];
        }
        // save the movie
        doc.save(function(err) {
            if (err) {
                return res.send(err);
            }
            res.json(doc);
        });
    });
});
app.put('/listbanco/:id',function (req,res) {
    //  var id = req.params.id;
    // console.log(req.body.name);
    //  db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
    //  update: {$set: {name: req.body.name, email:req.body.email, number:req.body.number}},
    //      new: true},function (err,doc) {
    //      res.json(doc);
    //  });
     Testb.findOne({ _id: req.params.id }, function(err, doc) {
         if (err) {
             return res.send(err);
         }
         for (prop in req.body) {
             doc[prop] = req.body[prop];
         }
         // save the movie
         doc.save(function(err) {
             if (err) {
                 return res.send(err);
             }
             res.json(doc);
         });
     });
 });

 app.put('/listrestaurante/:id',function (req,res) {
    //  var id = req.params.id;
    // console.log(req.body.name);
    //  db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
    //  update: {$set: {name: req.body.name, email:req.body.email, number:req.body.number}},
    //      new: true},function (err,doc) {
    //      res.json(doc);
    //  });
     Testr.findOne({ _id: req.params.id }, function(err, doc) {
         if (err) {
             return res.send(err);
         }
         for (prop in req.body) {
             doc[prop] = req.body[prop];
         }
         // save the movie
         doc.save(function(err) {
             if (err) {
                 return res.send(err);
             }
             res.json(doc);
         });
     });
 });

 app.put('/listhotel/:id',function (req,res) {
    //  var id = req.params.id;
    // console.log(req.body.name);
    //  db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
    //  update: {$set: {name: req.body.name, email:req.body.email, number:req.body.number}},
    //      new: true},function (err,doc) {
    //      res.json(doc);
    //  });
     Testh.findOne({ _id: req.params.id }, function(err, doc) {
         if (err) {
             return res.send(err);
         }
         for (prop in req.body) {
             doc[prop] = req.body[prop];
         }
         // save the movie
         doc.save(function(err) {
             if (err) {
                 return res.send(err);
             }
             res.json(doc);
         });
     });
 });

 app.put('/listbare/:id',function (req,res) {
    //  var id = req.params.id;
    // console.log(req.body.name);
    //  db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
    //  update: {$set: {name: req.body.name, email:req.body.email, number:req.body.number}},
    //      new: true},function (err,doc) {
    //      res.json(doc);
    //  });
     Tests.findOne({ _id: req.params.id }, function(err, doc) {
         if (err) {
             return res.send(err);
         }
         for (prop in req.body) {
             doc[prop] = req.body[prop];
         }
         // save the movie
         doc.save(function(err) {
             if (err) {
                 return res.send(err);
             }
             res.json(doc);
         });
     });
 });

 app.put('/listcentro/:id',function (req,res) {
    //  var id = req.params.id;
    // console.log(req.body.name);
    //  db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
    //  update: {$set: {name: req.body.name, email:req.body.email, number:req.body.number}},
    //      new: true},function (err,doc) {
    //      res.json(doc);
    //  });
     Testc.findOne({ _id: req.params.id }, function(err, doc) {
         if (err) {
             return res.send(err);
         }
         for (prop in req.body) {
             doc[prop] = req.body[prop];
         }
         // save the movie
         doc.save(function(err) {
             if (err) {
                 return res.send(err);
             }
             res.json(doc);
         });
     });
 });


app.listen(3000);
console.log("Server running on port 3000");