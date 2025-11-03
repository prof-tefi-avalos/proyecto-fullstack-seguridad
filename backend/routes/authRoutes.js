const express = require('express')
const bcrypt = require("bcrypt")
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post("/register", async (req, res) => {
    const { email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({email, password: hashedPassword})

    res.json({message: "usuario creado", user})
})

router.post("/login", async(req, res) => {
    const { email, password } = req.body
    
    const user = await User.findOne({email})
    if(!user) return res.status(400).json({message: "Usuario o contraseña incorrectos"})

    const match = await bcrypt.compare(password, user.password)
    if(!match) return res.status(400).json({message: "Usuario o contraseña incorrectos"})

    const token = jwt.sign({userId: user._id}, "CLAVE_SECRETA", {expiresIn: '1hr'})

    res.json({token})
})

module.exports = router