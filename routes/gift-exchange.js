const express = require("express");
const router = express.Router();

const gift = {
    pepperoni: 0,
    cheese: 0,
};

//Practice GET request (Send current state of poll (voting) to router)
router.get("/", async(req, res, next) => {
    res.status(200).json(gift);
})

//Practice POST request
router.post("/:giftName", async (req, res, next) => {
    console.log(req.params);

    res.status(200).json(req.params);
})

//Allow any part of our app access to this server
module.exports = router;