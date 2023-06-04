const express = require("express")

const router = express.Router()

router.get('/test', (req, res) => {
    res.send("This is my test route")
})

router.get('/test2', (req, res) => {
    res.send("This is my test2 route")
})

module.exports = router