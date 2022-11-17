import {usernameValidator, passwordValidator, emailValidator} from '../../components/accountValidator/accountValidator.js'

export function signupGuard(req,res,next){
    const error = {}
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    if(!usernameValidator(username) || !passwordValidator(password) || !emailValidator(email)){

        if(!usernameValidator(username)){
            error.username = 'Username is not valid'
        }
        if(!passwordValidator(password)){
            error.password = 'Password is not valid'
        }
        if(!emailValidator(email)){
            error.email = 'Email is not valid'
        }

        res.status(400).send({error:error})
    } else {
        return next();
    }

}