import { usernameValidator, passwordValidator, emailValidator } from '../../components/accountValidator/accountValidator.js'
import { userExist, usernameOk } from '../../database/dml_sqlite.js'
import { comparePassword } from '../password.js/password.js';

export async function signupGuard(req, res, next) {
    const error = {};
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const userValid = usernameValidator(username);
    const passwordValid = passwordValidator(password);
    const emailValid = emailValidator(email);
    const exists = await userExist(username,email)

    console.log(exists)
    console.log(userValid)
    console.log(emailValid)
    console.log(passwordValid)
    if (!userValid || !passwordValid || !emailValid || exists) {
      
        if (exists) {
            error.exists = 'account already exists'
        }
      
        if (userValid) {
            error.username = 'Username is not valid'
        }
        if (passwordValid) {
            error.password = 'Password is not valid'
        }
        if (emailValid) {
            error.email = 'Email is not valid'
        }

        res.status(400).send({ error: error })
    } else {
        return next();
    }

}

export async function loginOk(req, res, next){

    const username = req.body.username
    const password = req.body.password
    const [currentUser] = await usernameOk(username)
    if(currentUser){
        const isOk = await comparePassword(password, currentUser.password)
        if(isOk){
            return next();
        }
        res.status(400).send({data: {message: "Wrong account info"}})
    }else{
        res.status(400).send({data: {message: "Wrong account info"}})
    }
}
