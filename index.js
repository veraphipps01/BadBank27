var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js');

// used to serve static files from public folder
app.use(express.static('public'));
app.use(cors());


// create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
   dal.create(req.params.name, req.params.email, req.params.password).
   then((user) => {
       console.log(user);
        res.send(user);
});
});


// all accounts
app.get('/account/all', function (req, res) {
  dal.all().
    then((docs) => {
        console.log(docs);
        res.send(docs);
    });
});

// balance 
app.get('/account/balance/:email', function (req, res) {
    res.send({
        email: req.params.email,
        balance: '100'
    });
});


    // withdrawal
    app.get('/account/withdrawal/:email/:amount', function (req, res) {
        res.send({
            email: req.params.email,
            amount: req.params.amount
        });
    });

    // deposit
 app.get('/account/deposit/:email/:amount', function (req, res) {
        res.send({
            email: req.params.email,
            amount: req.params.amount
        });
    });


var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server is running on port: ' + port);
});
