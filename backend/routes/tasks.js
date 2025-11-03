const auth = require('../middleware/auth')
const express = require('express')

const router = express.Router()

router.get("/", auth, (req, res) => {
    res.json({message: "Info privada del usuario:" + req.userId})
})

module.exports = router
