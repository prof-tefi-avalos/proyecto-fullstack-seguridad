const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]

    if(!token) return res.status(401).json({message: "No hay token o expiró"})

    try{
        const decode = jwt.verify(token, "CLAVE_SECRETA")
        req.userId = decode.userId
        next()
    } catch {
        return res.status(401).json({message: "Token inválido"})
    }
}