const CustomError = require('../errors')
const {isTokenValid} = require('../utils')

const authenticateUser = async(req, res, next) => {
    const token = req.signedCookies.token

    if(!token){
        throw new CustomError.UnauthenticatedError('Authentication Invalid')
    } 
    try{
        const {name, email, userId, phone, image, facebook, tiktok, role} = isTokenValid({token})
        req.user = {name, email, userId, phone, image, facebook, tiktok, role}
        next()

    } catch(error){
        throw new CustomError.UnauthenticatedError('Authentication Invalid')
    }
    
}

// const authenticatePermissions = (req, res, next) => {
//     if(req.user.role !== 'admin'){
//         throw new CustomError.UnauthorizedError('Not Permitted')
//     }
//     next()
// }


const authenticatePermissions = (...role) => {
    return (req, res, next) => {
        if(!role.includes(req.user.role)){
            throw new CustomError.UnauthorizedError('Not Permitted')
        }
        next()
    }
}
module.exports = {
    authenticateUser,
    authenticatePermissions
}