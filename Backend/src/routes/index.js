const {Router} = require('express');

const {signUp} = require('../controllers/signup_controllers');
const {signIn} = require('../controllers/signin_controllers');

const router = Router();

router.post("/signup",signUp)
router.post("/signIn",signIn)


module.exports = router;
