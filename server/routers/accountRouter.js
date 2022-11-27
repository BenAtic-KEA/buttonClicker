import  Router  from "express";
const router = Router();
import { saveUser } from "../database/dml_sqlite.js";
import { loginOk, signupGuard } from '../components/middleware/accountMiddleware.js'
import { encryptPassword } from '../components/password/password.js'
import { sendAutoMail } from '../components/nodemailer/nodemailer.js'

router.post("/api/sign-up",signupGuard, async (req,res) => {
    const username = req.body.username
    const password = await encryptPassword(req.body.password)
    const email = req.body.email
    try {
        const response = await saveUser(username,password,email)
        let mailText = `Sign up is complete \n You you should now be able to login with you account`
        const mailSent = await sendAutoMail({email:email, name:username, subject:"Account Creation", text:mailText})

        res.send({data: {
            changes: response.changes,
            user: {
                username: username,
                email: email,
                message: mailSent
            }
        }
        })
    } catch (error) {
        res.status(400).send({data:error})
    }
})


import { rateLimit } from 'express-rate-limit';


const loginLimiter = rateLimit({
    windowMs:2*60*1000,
    max:3,
    standardHeaders: true,
    legacyHeaders: false,
    message: (req,res) => {
        res.send({data: {message: 'You only have 3 tries every 2 minutes.'}})    
    }
});

router.use('/api/login',loginLimiter)
router.post("/api/login", loginOk, (req,res) => {
    const {username} = req.body

    if(req.session.authenticated){
        res.send({data: {message: "logged in!"}});
    }else{
        req.session.authenticated = true;
        req.session.user = { username : username }
        res.send({data:{message: "logged in!"}})        
    }
});


export default router