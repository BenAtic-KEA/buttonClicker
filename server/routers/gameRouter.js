import { Router } from "express";
import { isLoggedIn } from "../components/middleware/accountMiddleware.js";
import { saveClicks } from "../database/dml_sqlite.js";

const router = Router();
router.use(isLoggedIn)


router.post('/api/saveClicks',async (req, res) => {

    try {
        let username = req.session.user.username
        let clicks = req.body.clicks
        const result = await saveClicks(username, clicks)
        res.send({data:{message: "clicks saved"}})
    } catch (error) {
        res.status(400).send({data: error})
    }
})

export default router;