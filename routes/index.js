var express = require('express');
var router = express.Router();
var URL="mongodb://rishvik:Mukul9870@ds131492.mlab.com:31492/commando"
const db=require('monk')(URL)
const docs=db.get('collecu')

/* GET home page. */
router.get('/', function(req, res, next) {
    docs.insert({"name":""}, function (err, docs) {
        if (err) console.log(err)
        else res.json(docs[0]);
    })
});
router.post('/insert', function(req, res, next) {
    var flname=req.body.fname;
    var username=req.body.name;
    var pass=req.body.password;
    var cty=req.body.fcity;

    docs.insert({"fullname": flname,"name":username, "password":pass,"city":cty} ,function(err, docs){
        if(err)console.log(err);
        else  res.json(docs[0]);


    })
});

module.exports = router;