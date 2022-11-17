import  Router  from "express";
const router = Router();
import { saveUser } from "../database/dml_sqlite.js";

const openSessions = {
    sessionkey: []
}

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

    res.send({data: {
        message: "Logged in!"}})
})

export default router