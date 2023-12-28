const router = require("express").Router();
const authCtrl = require("../controller/auth-ctrl");

router.post("/register", authCtrl.registerUser);

router.get("/login", authCtrl.loginUser);



module.exports = router;
