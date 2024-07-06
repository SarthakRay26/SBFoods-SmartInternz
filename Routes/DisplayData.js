const express = require('express')
const router = express.Router()

router.post('/foodData',(req,res)=>{
    try {
        res.send("Hello World");
    } catch (error) {
        console.log(error.message);
        res.send("Server Error")
    }
})

module.exports = router;