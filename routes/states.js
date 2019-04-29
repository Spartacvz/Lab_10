var express = require('express')
var States = require('..models').States

var router = express.Router()

router.get('/states', function (req, res, next) {
    States.findAll({order: ['name']})
        .then( states =>{
            return res.json(states)
        })
        .catch(err => next.err() )

    module.exports = router
})