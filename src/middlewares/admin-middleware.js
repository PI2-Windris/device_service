const jwt = require('jsonwebtoken');
const fetch = require('node-fetch');

const isAdminMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
        if (!token)
            return res.json({ err: "Não autorizado. Token não informado" }).status(401);
            
        const webToken = await jwt.verify(token.split(" ")[1], process.env.SECRET);
        console.log(`http://${process.env.USER_HOST}:${process.env.USER_PORT}/user_service/users/${webToken.id}`)

        const userRequest = await fetch(`http://${process.env.USER_HOST}:${process.env.USER_PORT}/users/${webToken.id}`, {
            method: 'GET',
            headers: { 'authorization': token },
        });
        const user = await userRequest.json();
        console.log(user)
        if(user.isadmin)
            return next();
        else
            return res.json({ err: "Não autorizado. Usuário não é administrador!" }).status(401);        
    } catch (e) {
        return res.json(e).status(400);
    }
}

module.exports = isAdminMiddleware;