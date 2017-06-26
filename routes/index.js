var express = require('express');
var router = express.Router();
var URL="mongodb://rishvik:Mukul9870@ds131492.mlab.com:31492/commando"
const db=require('monk')(URL)
const docs=db.get('collecu')

/* GET home page. */
router.get('/', function(req, res, next) {
    docs.insert({"name":"Mukul_Arora"}, function (err, docs) {
        if (err) console.log(err)
        else res.json(docs[0]);
    })
});
router.get('/find',function(req, res, next){
    docs.find({"id":"we4567"},function(err, docs){
        if (err) console.log(err)
        else res.json(docs[0]);
    })
}
);

module.exports = router;
