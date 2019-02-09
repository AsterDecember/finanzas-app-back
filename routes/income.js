const express = require('express')
const router = express.Router()
const Income = require('../models/Income')
const User = require('../models/User')

//

router.post('/income',(req,res,next)=>{
    Income.create({
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        user: req.body.user._id
    })
        .then(response => {
            User.findByIdAndUpdate(req.body.user._id,{$push:{income:response._id}})
                .then(response =>{
                    return res.json(response)})
                .catch(e=>next(e))
        })
        .catch(e=> res.json(e))
})


router.get('/income/:id',(req,res,next)=>{
    const {id} = req.params
    Income.find({user:id})
        .then(response => res.json(response))
        .catch(e => res.json(e))
})


router.delete('/income/:id',(req,res,next)=>{
    const {id} = req.params
    Book.findByIdAndRemove(id)
        .then(response => res.json({message: "Ingreso eliminado"}))
        .catch(e=> res.json(e))
})



module.exports = router