const express = require('express');
const router = express.Router();
const Reading = require('../models/reading');

router.get('/readings',function(req,res,next){
    Reading.find({}).then(function(readings){
        res.send(readings);
    }).catch(next);
});

router.post('/readings',function(req,res,next){
    Reading.create(req.body).then(function(reading){
        res.send(reading);
    }).catch(next);
});

router.put('/readings/:id',function(req,res,next){
    Reading.findOneAndUpdate({_id: req.params.id},req.body).then(function(reading){
        Reading.findOne({_id: req.params.id}).then(function(reading){
            res.send(reading);
        });
    });
});

router.delete('/readings/:id',function(req,res,next){
    Reading.findOneAndDelete({_id: req.params.id}).then(function(reading){
        res.send(reading);
    });
});

module.exports = router;