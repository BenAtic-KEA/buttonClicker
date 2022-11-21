import  Router  from "express";
const router = Router();
import { saveUser } from "../database/dml_sqlite.js";
import { loginOk, signupGuard } from '../components/middleware/accountMiddleware.js'
import { encryptPassword } from '../components/password.js/password.js'

router.post("/api/sign-up",signupGuard, async (req,res) => {
    const username = req.body.username
    const password = await encryptPassword(req.body.password)
    const email = req.body.email
    try {
        const response = await saveUser(username,password,email)
        res.send({data: {
            changes: response.changes,
            user: {
                username: username,
                email: email
            }
        }
        })
    } catch (error) {
        res.status(400).send({data:error})
    }
})


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