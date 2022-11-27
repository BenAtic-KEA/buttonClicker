import { Router } from "express";
import { isLoggedIn } from "../components/middleware/accountMiddleware.js";
import { saveClicks , getStoredClicks } from "../database/dml_sqlite.js";

const router = Router();

router.post('/api/saveClicks', isLoggedIn, async (req, res) => {

    let username = req.session.user.username
    let clicks = req.body.clicks

    if (clicks <= 0) {
        console.log(clicks)
        res.status(400).send({ data: { message: "has to be above 0 to save" } })
    } else {
        const result = await saveClicks(username, clicks)
        res.send({ data: { message: "clicks saved" } })
    }
})

router.get('/api/getTotalClicks', isLoggedIn, async (req, res) => {
    let username = req.session.user.username
    const totalCount = await getStoredClicks(username);
    res.send({data: {totalCount}})

})

export default router;