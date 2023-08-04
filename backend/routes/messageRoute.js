const router = require("express").Router();
const { addMessage, getMessages } = require("../controller/messageCtrl");

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);

module.exports = router;
