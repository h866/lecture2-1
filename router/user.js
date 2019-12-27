var express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
    res.render('user',{name : "강희도"})
})

router.get('/about',(req,res)=>{
    res.render('detail',{detail : "집가고싶다."})
})

module.exports = router;